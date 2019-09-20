// Copyright 2017-2019, University of Colorado Boulder

/**
 * Creates game challenges for Level 1 in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const BaseChallengeFactory = require( 'GRAPHING_LINES/linegame/model/BaseChallengeFactory' );
  const EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  const Fraction = require( 'PHETCOMMON/model/Fraction' );
  const graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  const GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  const ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  const Range = require( 'DOT/Range' );
  const ValuePool = require( 'GRAPHING_LINES/linegame/model/ValuePool' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function GSIChallengeFactory1( options ) {
    BaseChallengeFactory.call( this, options );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory1', GSIChallengeFactory1 );

  return inherit( BaseChallengeFactory, GSIChallengeFactory1, {

    /**
     * Creates challenges for this game level.
     * @returns {Challenge[]} array of challenges
     * @public
     * @override
     */
    createChallenges: function() {

      // pools of values for slope and y-intercept
      const slopePool = new ValuePool( this.createSlopeArrays() );
      const yInterceptPool = new ValuePool( this.createYInterceptArrays() );

      const challenges = [];

      if ( phet.joist.random.nextBoolean() ) {

        // CHALLENGE 1
        challenges.push( new GraphTheLine(
          '1: GraphTheLine, required slope, slope variable',
          this.createSlopeInterceptLine( slopePool.chooseRequired(), yInterceptPool.chooseOptional() ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.SLOPE,
          this.xRange, this.yRange ) );

        // CHALLENGE 2
        challenges.push( new MakeTheEquation(
          '2: MakeTheEquation, y-intercept variable',
          this.createSlopeInterceptLine( slopePool.chooseOptional(), yInterceptPool.chooseOptional() ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.INTERCEPT,
          this.xRange, this.yRange ) );
      }
      else {

        // CHALLENGE 1
        challenges.push( new GraphTheLine(
          '1: GraphTheLine, y-intercept variable',
          this.createSlopeInterceptLine( slopePool.chooseOptional(), yInterceptPool.chooseOptional() ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.INTERCEPT,
          this.xRange, this.yRange ) );

        // CHALLENGE 2
        challenges.push( new MakeTheEquation(
          '2: MakeTheEquation, required slope, slope variable',
          this.createSlopeInterceptLine( slopePool.chooseRequired(), yInterceptPool.chooseOptional() ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.SLOPE,
          this.xRange, this.yRange ) );
      }

      // CHALLENGE 3
      challenges.push( new GraphTheLine(
        '3: GraphTheLine, required slope, slope variable',
        this.createSlopeInterceptLine( slopePool.chooseRequired(), yInterceptPool.chooseOptional() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE,
        this.xRange, this.yRange ) );

      // CHALLENGE 4
      challenges.push( new GraphTheLine(
        '4: GraphTheLine, required y-intercept, y-intercept variable',
        this.createSlopeInterceptLine( slopePool.chooseOptional(), yInterceptPool.chooseRequired() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 5
      challenges.push( new MakeTheEquation(
        '5: MakeTheEquation, required slope, slope variable',
        this.createSlopeInterceptLine( slopePool.chooseRequired(), yInterceptPool.chooseOptional() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE,
        this.xRange, this.yRange ) );

      // CHALLENGE 6
      challenges.push( new MakeTheEquation(
        '6: MakeTheEquation, required y-intercept, y-intercept variable',
        this.createSlopeInterceptLine( slopePool.chooseOptional(), yInterceptPool.chooseRequired() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.INTERCEPT,
        this.xRange, this.yRange ) );

      assert && assert( slopePool.isEmpty(), 'some required slope was not used' );
      assert && assert( yInterceptPool.isEmpty(), 'some required y-intercept was not used' );

      return challenges;
    },

    /**
     * Creates the sets of slopes used for generating challenges.
     * @returns {Fraction[][]}
     * @protected
     */
    createSlopeArrays: function() {
      return [
        [ new Fraction( 3, 2 ), new Fraction( 4, 3 ), new Fraction( 5, 2 ), new Fraction( 5, 3 ) ],
        [ new Fraction( 1, 2 ), new Fraction( 1, 3 ), new Fraction( 1, 4 ), new Fraction( 1, 5 ) ],
        [ new Fraction( 2, 3 ), new Fraction( 3, 4 ), new Fraction( 3, 5 ), new Fraction( 2, 5 ) ]
      ];
    },

    /**
     * Creates the sets of y-intercepts used for generating challenges.
     * @returns {number[][]}
     * @protected
     */
    createYInterceptArrays: function() {
      const yRangeSubset = new Range( -6, 4 );
      assert && assert( this.yRange.containsRange( yRangeSubset ), 'values are out of range' );
      return [
        ValuePool.rangeToArray( new Range( yRangeSubset.min, -1 ) ), // negative intercepts
        ValuePool.rangeToArray( new Range( 1, yRangeSubset.max ) )   // positive intercepts
      ];
    }
  } );
} );