// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 3 in the 'Graphing Slope-Intercept' sim.
 * Uses the same slope and y-intercept arrays as Level 2.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var GLQueryParameters = require( 'GRAPHING_LINES/common/GLQueryParameters' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  var GSIChallengeFactory2 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  var ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  var PlaceThePoints = require( 'GRAPHING_LINES/linegame/model/PlaceThePoints' );
  var RandomChooser = require( 'GRAPHING_LINES/linegame/model/RandomChooser' );
  var Range = require( 'DOT/Range' );

  /**
   * @constructor
   */
  function GSIChallengeFactory3() {
    GSIChallengeFactory2.call( this );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory3', GSIChallengeFactory3 );

  return inherit( GSIChallengeFactory2, GSIChallengeFactory3, {

    /**
     * Creates challenges for this game level.
     * @param {Range} xRange range of the graph's x axis
     * @param {Range} yRange range of the graph's y axis
     * @return {Challenge[]} array of challenges
     * @public
     * @override
     */
    createChallenges: function( xRange, yRange ) {

      var challenges = [];

      // hoist variables
      var slope;
      var yIntercept;

      // for slope manipulation challenges, 1 slope must come from each list
      var slopeArrays = this.createSlopeArrays( xRange, yRange );
      var slopeArrayIndices = RandomChooser.rangeToArray( new Range( 0, slopeArrays.length - 1 ) );

      // for y-intercept manipulation challenges, one must be positive, one negative
      var yInterceptArrays = this.createYInterceptArrays( yRange );
      var yInterceptArrayIndices = RandomChooser.rangeToArray( new Range( 0, yInterceptArrays.length - 1 ) );

      // CHALLENGE 1: Graph-the-Line, slope & intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays ); // first required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // first required y-intercept
      challenges.push( new GraphTheLine( 'required y-intercept, slope and intercept variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        xRange, yRange ) );

      // CHALLENGE 2: Graph-the-Line, slope & intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // second required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays );
      challenges.push( new GraphTheLine( 'required slope, slope and intercept variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        xRange, yRange ) );

      // CHALLENGE 3: Make-the-Equation, slope & intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // second required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // second required y-intercept
      challenges.push( new MakeTheEquation( 'required slope, required y-intercept, slope and intercept variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        xRange, yRange ) );

      // CHALLENGE 4: Make-the-Equation, slope & intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // third required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays );
      challenges.push( new MakeTheEquation( 'required slope, slope and intercept variable',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        ManipulationMode.SLOPE_INTERCEPT,
        xRange, yRange ) );

      // CHALLENGE 5 & 6: Place-the-Point
      var placeThePointChallenges = this.createPlaceThePointChallenges( xRange, yRange );
      challenges = challenges.concat( placeThePointChallenges );

      // shuffle and return
      return ( GLQueryParameters.shuffleChallenges ? phet.joist.random.shuffle( challenges ) : challenges );
    },

    /**
     * Creates place-the-point challenges for this level.
     * @param {Range} xRange
     * @param {Range} yRange
     * @returns {PlaceThePoints[]}
     * @protected
     */
    createPlaceThePointChallenges: function( xRange, yRange ) {

      var challenges = [];

      var range = new Range( -5, 5 );
      assert && assert( xRange.containsRange( range ) && yRange.containsRange( range ) );
      var x1 = 0; // causes y-intercept to be an integer
      var yList = RandomChooser.rangeToArray( range );
      var riseList = RandomChooser.rangeToArray( range, { excludeZero: true } ); // prevent zero slope
      var runList = RandomChooser.rangeToArray( range, { excludeZero: true } );  // prevent undefined slope

      // CHALLENGE 5: Place-the-Point, integer y-intercept
      var y1 = RandomChooser.choose( yList );
      var rise = RandomChooser.choose( riseList );
      var run = RandomChooser.choose( runList );
      if ( Math.abs( rise / run ) === 1 ) { // prevent unit slope
        run = RandomChooser.choose( runList );
      }
      challenges.push( new PlaceThePoints( 'random points, integer y-intercept',
        new Line( x1, y1, x1 + run, y1 + rise ),
        EquationForm.SLOPE_INTERCEPT,
        xRange, yRange ) );

      // CHALLENGE 6: Place-the-Point, integer y-intercept
      y1 = RandomChooser.choose( yList );
      rise = RandomChooser.choose( riseList );
      run = RandomChooser.choose( runList );
      if ( Math.abs( rise / run ) === 1 ) { // prevent unit slope
        run = RandomChooser.choose( runList );
      }
      challenges.push( new PlaceThePoints( 'random points, integer y-intercept',
        new Line( x1, y1, x1 + run, y1 + rise ),
        EquationForm.SLOPE_INTERCEPT,
        xRange, yRange ) );

      return challenges;
    }
  } );
} );