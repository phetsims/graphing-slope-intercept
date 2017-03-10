// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 3 in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ChallengeFactory = require( 'GRAPHING_LINES/linegame/model/ChallengeFactory' );
  var ChallengeFactory2 = require( 'GRAPHING_LINES/linegame/model/ChallengeFactory2' );
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var GLQueryParameters = require( 'GRAPHING_LINES/common/GLQueryParameters' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  var ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  var PlaceThePoints = require( 'GRAPHING_LINES/linegame/model/PlaceThePoints' );
  var RandomChooser = require( 'GRAPHING_LINES/linegame/model/RandomChooser' );
  var RangeWithValue = require( 'DOT/RangeWithValue' );

  /**
   * @constructor
   */
  function ChallengeFactory3() {
    ChallengeFactory.call( this );
  }

  graphingSlopeIntercept.register( 'ChallengeFactory3', ChallengeFactory3 );

  return inherit( ChallengeFactory, ChallengeFactory3, {

    /**
     * Creates challenges for this game level.
     * @override
     * @param {Range} xRange range of the graph's x axis
     * @param {Range} yRange range of the graph's y axis
     * @return {Challenge[]} array of challenges
     * @override
     * @public
     */
    createChallenges: function( xRange, yRange ) {

      // all variables, manually hoisted
      var challenges = [];
      var slope;
      var yIntercept;
      var x1;
      var y1;
      var rise;
      var run;

      // for slope manipulation challenges, 1 slope must come from each list
      var slopeArrays = ChallengeFactory2.createSlopeArrays(); // same slopes as level 1
      var slopeArrayIndices = RandomChooser.rangeToArray( new RangeWithValue( 0, slopeArrays.length - 1 ) );

      // for y-intercept manipulation challenges, one must be positive, one negative
      var yInterceptArrays = [
        RandomChooser.rangeToArray( new RangeWithValue( yRange.min, -1 ) ),
        RandomChooser.rangeToArray( new RangeWithValue( 1, yRange.max ) )
      ];
      var yInterceptArrayIndices = RandomChooser.rangeToArray( new RangeWithValue( 0, yInterceptArrays.length - 1 ) );

      // for Place-the-Point challenges
      var range = new RangeWithValue( -5, 5 );
      assert && assert( xRange.containsRange( range ) && yRange.containsRange( range ) );
      var xList = RandomChooser.rangeToArray( range );
      var yList = RandomChooser.rangeToArray( range );
      var riseList = RandomChooser.rangeToArray( range, { excludeZero: true } ); // prevent zero slope
      var runList = RandomChooser.rangeToArray( range, { excludeZero: true } );  // prevent undefined slope

      // CHALLENGE 1: Graph-the-Line, slope-intercept form, slope and intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays ); // first required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // first required y-intercept
      challenges.push( new GraphTheLine( 'random slope, required y-intercept',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE_INTERCEPT, xRange, yRange ) );

      // CHALLENGE 2: Graph-the-Line, slope-intercept form, slope and intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // second required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
      challenges.push( new GraphTheLine( 'required slope, random y-intercept',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE_INTERCEPT, xRange, yRange ) );

      // CHALLENGE 3: Make-the-Equation, slope-intercept form, slope and intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // second required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // second required y-intercept
      challenges.push( new MakeTheEquation( 'required slope, required y-intercept',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE_INTERCEPT, xRange, yRange ) );

      // CHALLENGE 4: Make-the-Equation, slope-intercept, slope and intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // third required slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
      challenges.push( new MakeTheEquation( 'required slope, random y-intercept',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE_INTERCEPT, xRange, yRange ) );

      // CHALLENGE 5: Place-the-Point, slope-intercept
      x1 = 0; // y-intercept must be an integer
      y1 = RandomChooser.choose( yList );
      rise = RandomChooser.choose( riseList );
      run = RandomChooser.choose( runList );
      if ( Math.abs( rise / run ) === 1 ) { // prevent unit slope
        run = RandomChooser.choose( runList );
      }
      challenges.push( new PlaceThePoints( 'random points, integer y-intercept',
        new Line( x1, y1, x1 + run, y1 + rise ),
        EquationForm.SLOPE_INTERCEPT, xRange, yRange ) );

      // CHALLENGE 6: Place-the-Point, slope-intercept
      x1 = RandomChooser.choose( xList );
      y1 = RandomChooser.choose( yList );
      rise = RandomChooser.choose( riseList );
      run = RandomChooser.choose( runList );
      if ( Math.abs( rise / run ) === 1 ) { // prevent unit slope
        run = RandomChooser.choose( runList );
      }
      challenges.push( new PlaceThePoints( 'random points',
        new Line( x1, y1, x1 + run, y1 + rise ),
        EquationForm.SLOPE_INTERCEPT, xRange, yRange ) );

      // shuffle and return
      return ( GLQueryParameters.shuffleChallenges ? phet.joist.random.shuffle( challenges ) : challenges );
    }
  } );
} );