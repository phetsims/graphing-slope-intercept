// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 1 in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var Fraction = require( 'PHETCOMMON/model/Fraction' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  var GSIChallengeFactory = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  var ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  var Range = require( 'DOT/Range' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function GSIChallengeFactory1( options ) {
    GSIChallengeFactory.call( this, options );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory1', GSIChallengeFactory1 );

  return inherit( GSIChallengeFactory, GSIChallengeFactory1, {

    /**
     * Initializes the pools of values for slopes and y-intercepts.
     * @protected
     */
    initializePools: function() {

      var self = this;

      // slopes ----------------------------------------------------

      var slopeArrays = this.createSlopeArrays();

      // @private choose 1 required slope from each array
      this.requiredSlopes = [];
      slopeArrays.forEach( function( array ) {
        self.requiredSlopes.push( GSIChallengeFactory.choose( array ) );
      } );

      // @private the remaining slopes are up for grabs
      this.slopes = _.flatten( slopeArrays );

      // y-intercepts -----------------------------------------------

      var yInterceptArrays = this.createYInterceptArrays();

      // @private choose 1 required y-intercept from each array
      this.requiredYIntercepts = [];
      yInterceptArrays.forEach( function( array ) {
        self.requiredYIntercepts.push( GSIChallengeFactory.choose( array ) );
      } );

      // @private the remaining y-intercepts are up for grabs
      this.yIntercepts = _.flatten( yInterceptArrays );
    },

    /**
     * Creates challenges for this game level.
     * @return {Challenge[]} array of challenges
     * @public
     * @override
     */
    createChallenges: function() {

      this.initializePools();

      var challenges = [];
      var slope;
      var yIntercept;

      if ( phet.joist.random.nextBoolean() ) {

        // CHALLENGE 1
        slope = this.chooseRequiredSlope();
        yIntercept = this.chooseYIntercept();
        challenges.push( new GraphTheLine( 'required slope, slope variable',
          Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.SLOPE,
          this.xRange, this.yRange ) );

        // CHALLENGE 2
        slope = this.chooseSlope();
        yIntercept = this.chooseYIntercept();
        challenges.push( new MakeTheEquation( 'y-intercept variable',
          Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.INTERCEPT,
          this.xRange, this.yRange ) );
      }
      else {

        // CHALLENGE 1
        slope = this.chooseSlope();
        yIntercept = this.chooseYIntercept();
        challenges.push( new GraphTheLine( 'y-intercept variable',
          Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.INTERCEPT,
          this.xRange, this.yRange ) );

        // CHALLENGE 2
        slope = this.chooseRequiredSlope();
        yIntercept = this.chooseYIntercept();
        challenges.push( new MakeTheEquation( 'required slope, slope variable',
          Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
          EquationForm.SLOPE_INTERCEPT,
          ManipulationMode.SLOPE,
          this.xRange, this.yRange ) );
      }

      // CHALLENGE 3
      slope = this.chooseRequiredSlope();
      yIntercept = this.chooseYIntercept();
      challenges.push( new GraphTheLine( 'required slope, slope variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE,
        this.xRange, this.yRange ) );

      // CHALLENGE 4
      slope = this.chooseSlope();
      yIntercept = this.chooseRequiredYIntercept();
      challenges.push( new GraphTheLine( 'required y-intercept, y-intercept variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 5
      slope = this.chooseRequiredSlope();
      yIntercept = this.chooseYIntercept();
      challenges.push( new MakeTheEquation( 'required slope, slope variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE,
        this.xRange, this.yRange ) );

      // CHALLENGE 6
      slope = this.chooseSlope();
      yIntercept = this.chooseRequiredYIntercept();
      challenges.push( new MakeTheEquation( 'required y-intercept, y-intercept variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.INTERCEPT,
        this.xRange, this.yRange ) );

      assert && assert( this.requiredSlopes.length === 0, 'some required slope was not used' );
      assert && assert( this.requiredYIntercepts.length === 0, 'some required y-intercept was not used' );

      // shuffle and return
      return GSIChallengeFactory.shuffle( challenges );
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
      var yRangeSubset = new Range( -6, 4 );
      assert && assert( this.yRange.containsRange( yRangeSubset ), 'values are out of range' );
      return [
        GSIChallengeFactory.rangeToArray( new Range( yRangeSubset.min, -1 ) ),
        GSIChallengeFactory.rangeToArray( new Range( 1, yRangeSubset.max ) )
      ];
    },

    /**
     * @protected
     * @returns {Fraction}
     */
    chooseRequiredSlope: function() {
      return GSIChallengeFactory.choose( this.requiredSlopes );
    },

    /**
     * @protected
     * @returns {Fraction}
     */
    chooseSlope: function() {
      return GSIChallengeFactory.choose( this.slopes );
    },

    /**
     * @protected
     * @returns {number}
     */
    chooseRequiredYIntercept: function() {
      return GSIChallengeFactory.choose( this.requiredYIntercepts );
    },

    /**
     * @protected
     * @returns {number}
     */
    chooseYIntercept: function() {
      return GSIChallengeFactory.choose( this.yIntercepts );
    }
  } );
} );