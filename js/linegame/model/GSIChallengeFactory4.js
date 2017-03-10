// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 4 in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ChallengeFactory = require( 'GRAPHING_LINES/linegame/model/ChallengeFactory' );
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var Fraction = require( 'PHETCOMMON/model/Fraction' );
  var GLQueryParameters = require( 'GRAPHING_LINES/common/GLQueryParameters' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  var GSIChallengeFactory2 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  var ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  var RandomChooser = require( 'GRAPHING_LINES/linegame/model/RandomChooser' );
  var RangeWithValue = require( 'DOT/RangeWithValue' );

  /**
   * @constructor
   */
  function GSIChallengeFactory4() {
    ChallengeFactory.call( this );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory4', GSIChallengeFactory4 );

  return inherit( ChallengeFactory, GSIChallengeFactory4, {

    //TODO Challenges 1-4 will be identical to ChallengeFactory3, the difference is Challenges 5 & 6
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
      var slopeArrays;
      var slopeArrayIndices;
      var yInterceptArrays;
      var yInterceptArrayIndices;
      var equationForms;
      var slope;
      var yIntercept;
      var point;
      var positiveSlopes;

      //TODO replace this by extending GSIChallengeFactory2?
      var challengeFactory2 = new GSIChallengeFactory2();

      // for slope manipulation challenges, 1 slope must come from each list
      slopeArrays = challengeFactory2.createSlopeArrays( xRange, yRange );
      slopeArrayIndices = RandomChooser.rangeToArray( new RangeWithValue( 0, slopeArrays.length - 1 ) );

      // for y-intercept manipulation challenges, one must be positive, one negative
      yInterceptArrays = challengeFactory2.createYInterceptArrays( yRange );
      yInterceptArrayIndices = RandomChooser.rangeToArray( new RangeWithValue( 0, yInterceptArrays.length - 1 ) );

      // equation form for 3rd challenge of each type
      equationForms = [ EquationForm.SLOPE_INTERCEPT, EquationForm.POINT_SLOPE ];

      // Make-the-Equation, slope-intercept form, slope and intercept variable
      {
        slope = RandomChooser.chooseFromArrays( slopeArrays ); // unique slope
        yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // first required y-intercept
        challenges.push( new MakeTheEquation( '1 of 2 required y-intercepts',
          Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
          EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE_INTERCEPT, xRange, yRange ) );
      }

      // Make-the-Equation, point-slope form, point and slope variable
      {
        slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // first required slope
        point = ChallengeFactory.choosePointForSlope( slope, xRange, yRange ); // random point, not necessarily unique
        challenges.push( new MakeTheEquation( '1 of 3 required slopes',
          Line.createPointSlope( point.x, point.y, slope.numerator, slope.denominator ),
          EquationForm.POINT_SLOPE, ManipulationMode.POINT_SLOPE, xRange, yRange ) );
      }

      // Make-the-Equation, slope-intercept or point-slope form (random choice)
      if ( RandomChooser.choose( equationForms ) === EquationForm.SLOPE_INTERCEPT ) {
        // Make-the-Equation, slope-intercept form, slope and intercept variable
        slope = RandomChooser.chooseFromArrays( slopeArrays ); // unique slope
        yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
        challenges.push( new MakeTheEquation( 'random choice of slope-intercept',
          Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
          EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE_INTERCEPT, xRange, yRange ) );
      }
      else {
        // Make-the-Equation, point-slope form, point and slope variable
        slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // second required slope, unique
        point = ChallengeFactory.choosePointForSlope( slope, xRange, yRange ); // random point, not necessarily unique
        challenges.push( new MakeTheEquation( '2 of 2 required slopes, random choice of point-slope',
          Line.createPointSlope( point.x, point.y, slope.numerator, slope.denominator ),
          EquationForm.POINT_SLOPE, ManipulationMode.POINT_SLOPE, xRange, yRange ) );
      }

      // Graph-the-Line, slope-intercept form, slope and intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays ); // unique slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // second required y-intercept, unique
      challenges.push( new GraphTheLine( '2 of 2 required y-intercepts',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE_INTERCEPT, xRange, yRange ) );

      // Graph-the-Line, point-slope form, point and slope variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // third required slope, unique
      point = ChallengeFactory.choosePointForSlope( slope, xRange, yRange ); // random point, not necessarily unique
      challenges.push( new GraphTheLine( '3 of 3 required slopes',
        Line.createPointSlope( point.x, point.y, slope.numerator, slope.denominator ),
        EquationForm.POINT_SLOPE, ManipulationMode.POINT_SLOPE, xRange, yRange ) );

      /*
       * Graph-the-Line, slope-intercept or point-slope form (random choice), 2 points.
       * Choose y-intercept or point such that (x2,y2) is off the graph, so that user is forced to invert the slope.
       */
      {
        // choose a positive fractional slope
        positiveSlopes = challengeFactory2.createPositiveFractionalSlopes();
        positiveSlopes.push( new Fraction( 2, 1 ) );
        positiveSlopes.push( new Fraction( 3, 1 ) );
        positiveSlopes.push( new Fraction( 4, 1 ) );
        positiveSlopes.push( new Fraction( 5, 1 ) );
        slope = RandomChooser.choose( positiveSlopes );

        point = ChallengeFactory.choosePointForSlopeInversion( slope, xRange, yRange ); // random point, not necessarily unique

        if ( RandomChooser.choose( equationForms ) === EquationForm.SLOPE_INTERCEPT ) {
          // Graph-the-Line, slope-intercept, 2 points variable
          challenges.push( new GraphTheLine( 'slope-intercept because Make-the-Equation uses point-slope, force slope inversion',
            Line.createSlopeIntercept( slope.numerator, slope.denominator, point.y ),
            EquationForm.SLOPE_INTERCEPT, ManipulationMode.TWO_POINTS, xRange, yRange ) );
        }
        else {
          // Graph-the-Line, point-slope, 2 points variable
          challenges.push( new GraphTheLine( 'point-slope because Make-the-Equation uses slope-intercept, force slope inversion',
            Line.createPointSlope( point.x, point.y, slope.numerator, slope.denominator ),
            EquationForm.POINT_SLOPE, ManipulationMode.TWO_POINTS, xRange, yRange ) );
        }
      }

      // shuffle and return
      return ( GLQueryParameters.shuffleChallenges ? phet.joist.random.shuffle( challenges ) : challenges );
    }
  } );
} );