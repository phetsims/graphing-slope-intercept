// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 3 in the 'Graphing Slope-Intercept' sim.
 * Uses the same sets of slopes and y-intercepts as Level 2, but generates different challenges.
 * See createChallenges.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  var GSIChallengeFactory2 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  var ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  var PlaceThePoints = require( 'GRAPHING_LINES/linegame/model/PlaceThePoints' );
  var Range = require( 'DOT/Range' );
  var ValuePool = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/ValuePool' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function GSIChallengeFactory3( options ) {
    GSIChallengeFactory2.call( this, options );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory3', GSIChallengeFactory3 );

  return inherit( GSIChallengeFactory2, GSIChallengeFactory3, {

    /**
     * Creates challenges for this game level.
     * @return {Challenge[]} array of challenges
     * @public
     * @override
     */
    createChallenges: function() {

      // pools of values for slope and y-intercept
      var slopePool = new ValuePool( this.createSlopeArrays() );
      var yInterceptPool = new ValuePool( this.createYInterceptArrays() );

      var challenges = [];

      // CHALLENGE 1
      challenges.push( new GraphTheLine( 'required y-intercept, slope and intercept variable',
        this.createSlopeInterceptLine( slopePool.chooseOptional(), yInterceptPool.chooseRequired() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 2
      challenges.push( new GraphTheLine( 'required slope, slope and intercept variable',
        this.createSlopeInterceptLine( slopePool.chooseRequired(), yInterceptPool.chooseOptional() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 3
      challenges.push( new MakeTheEquation( 'required slope, required y-intercept, slope and intercept variable',
        this.createSlopeInterceptLine( slopePool.chooseRequired(), yInterceptPool.chooseRequired() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 4
      challenges.push( new MakeTheEquation( 'required slope, slope and intercept variable',
        this.createSlopeInterceptLine( slopePool.chooseRequired(), yInterceptPool.chooseOptional() ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 5 & 6
      var placeThePointChallenges = this.createPlaceThePointChallenges();
      challenges = challenges.concat( placeThePointChallenges );

      assert && assert( slopePool.isEmpty(), 'some required slope was not used' );
      assert && assert( yInterceptPool.isEmpty(), 'some required y-intercept was not used' );

      // shuffle and return
      return this.shuffle( challenges );
    },

    /**
     * Creates place-the-point challenges for this level.
     * @returns {PlaceThePoints[]}
     * @protected
     */
    createPlaceThePointChallenges: function() {

      var challenges = [];

      var range = new Range( -5, 5 );
      assert && assert( this.xRange.containsRange( range ) && this.yRange.containsRange( range ) );
      var x1 = 0; // causes y-intercept to be an integer
      var yList = ValuePool.rangeToArray( range );
      var riseList = ValuePool.rangeToArray( range, { excludeZero: true } ); // prevent zero slope
      var runList = ValuePool.rangeToArray( range, { excludeZero: true } );  // prevent undefined slope

      // CHALLENGE 5
      var y1 = ValuePool.choose( yList );
      var rise = ValuePool.choose( riseList );
      var run = ValuePool.choose( runList );
      if ( Math.abs( rise / run ) === 1 ) { // prevent unit slope
        run = ValuePool.choose( runList );
      }
      challenges.push( new PlaceThePoints( 'random points, integer y-intercept',
        new Line( x1, y1, x1 + run, y1 + rise ),
        EquationForm.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 6
      y1 = ValuePool.choose( yList );
      rise = ValuePool.choose( riseList );
      run = ValuePool.choose( runList );
      if ( Math.abs( rise / run ) === 1 ) { // prevent unit slope
        run = ValuePool.choose( runList );
      }
      challenges.push( new PlaceThePoints( 'random points, integer y-intercept',
        new Line( x1, y1, x1 + run, y1 + rise ),
        EquationForm.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      return challenges;
    }
  } );
} );