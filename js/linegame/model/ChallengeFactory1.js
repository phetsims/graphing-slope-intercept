// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 1, as specified in the design document.
 * Slope, intercept, and point (x1,y1) are all uniquely chosen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ChallengeFactory = require( 'GRAPHING_LINES/linegame/model/ChallengeFactory' );
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var Fraction = require( 'PHETCOMMON/model/Fraction' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GLQueryParameters = require( 'GRAPHING_LINES/common/GLQueryParameters' );
  var GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  var ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  var Range = require( 'DOT/Range' );
  var RandomChooser = require( 'GRAPHING_LINES/linegame/model/RandomChooser' );

  function ChallengeFactory1() {
    ChallengeFactory.call( this );
  }

  graphingSlopeIntercept.register( 'ChallengeFactory1', ChallengeFactory1 );

  return inherit( ChallengeFactory, ChallengeFactory1, {

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

      var challenges = [];

      // for slope manipulation challenges, 1 slope must come from each list
      var slopeArrays = [
        [ new Fraction( 3, 2 ), new Fraction( 4, 3 ), new Fraction( 5, 2 ), new Fraction( 5, 3 ) ],
        [ new Fraction( 1, 2 ), new Fraction( 1, 3 ), new Fraction( 1, 4 ), new Fraction( 1, 5 ) ],
        [ new Fraction( 2, 3 ), new Fraction( 3, 4 ), new Fraction( 3, 5 ), new Fraction( 2, 5 ) ]
      ];
      var slopeArrayIndices = RandomChooser.rangeToArray( new Range( 0, slopeArrays.length - 1 ) );

      // for y-intercept manipulation challenges, one must be positive, one negative
      var yInterceptRange = new Range( -6, 4 );
      assert && assert( yRange.containsRange( yInterceptRange ) );
      var yInterceptArrays = [
        RandomChooser.rangeToArray( new Range( yInterceptRange.min, -1 ) ),
        RandomChooser.rangeToArray( new Range( 1, yInterceptRange.max ) )
      ];
      var yInterceptArrayIndices = RandomChooser.rangeToArray( new Range( 0, yInterceptArrays.length - 1 ) );

      // choose 1 of each manipulation mode
      var slopeInterceptManipulationModes = [ ManipulationMode.SLOPE, ManipulationMode.INTERCEPT ];

      // NOTE: Do CHALLENGES 1 & 2 first, since they don't use "required" slopes or intercepts.
      // If we do them last, then slopeArrays and yInterceptArrays will be empty.

      // CHALLENGE 1: Graph-the-Line, slope-intercept form, slope or intercept variable (random choice)
      {
        // manipulation mode
        var manipulationMode = RandomChooser.choose( slopeInterceptManipulationModes );

        if ( manipulationMode === ManipulationMode.SLOPE ) {
          slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // first required slope
          yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
          challenges.push( new GraphTheLine( '1 of 3 required slopes',
            Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
            EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE, xRange, yRange ) );
        }
        else {
          slope = RandomChooser.chooseFromArrays( slopeArrays ); // unique slope
          yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
          challenges.push( new GraphTheLine( 'unique y-intercept',
            Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
            EquationForm.SLOPE_INTERCEPT, ManipulationMode.INTERCEPT, xRange, yRange ) );
        }
      }

      // CHALLENGE 2: Make-the-Equation, slope-intercept form, slope or intercept variable (whichever was not chosen above)
      {
        // manipulation mode
        manipulationMode = RandomChooser.choose( slopeInterceptManipulationModes );

        if ( manipulationMode === ManipulationMode.SLOPE ) {
          slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // first required slope, unique
          yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
          challenges.push( new MakeTheEquation( '1 of 3 required slopes',
            Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
            EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE, xRange, yRange ) );
        }
        else {
          slope = RandomChooser.chooseFromArrays( slopeArrays ); // unique slope
          yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
          challenges.push( new MakeTheEquation( 'unique y-intercept',
            Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
            EquationForm.SLOPE_INTERCEPT, ManipulationMode.INTERCEPT, xRange, yRange ) );
        }
      }

      // CHALLENGE 3: Graph-the-Line, slope-intercept form, slope variable
      var slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // second required slope
      var yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
      challenges.push( new GraphTheLine( '2 of 3 required slopes',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE, xRange, yRange ) );

      // CHALLENGE 4: Graph-the-Line, slope-intercept form, intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays ); // unique slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // first required y-intercept, unique
      challenges.push( new GraphTheLine( '1 of 2 required y-intercepts',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.INTERCEPT, xRange, yRange ) );

      // CHALLENGE 5: Make-the-Equation, slope-intercept form, slope variable
      slope = RandomChooser.chooseFromArrays( slopeArrays, slopeArrayIndices ); // third required slope, unique
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays ); // unique y-intercept
      challenges.push( new MakeTheEquation( '3 of 3 required slopes',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.SLOPE, xRange, yRange ) );

      // CHALLENGE 6: Make-the-Equation, slope-intercept form, intercept variable
      slope = RandomChooser.chooseFromArrays( slopeArrays ); // unique slope
      yIntercept = RandomChooser.chooseFromArrays( yInterceptArrays, yInterceptArrayIndices ); // second required y-intercept, unique
      challenges.push( new MakeTheEquation( '2 of 2 required y-intercepts',
        Line.createSlopeIntercept( slope.numerator, slope.denominator, yIntercept ),
        EquationForm.SLOPE_INTERCEPT, ManipulationMode.INTERCEPT, xRange, yRange ) );

      // shuffle and return
      return ( GLQueryParameters.shuffleChallenges ? phet.joist.random.shuffle( challenges ) : challenges );
    }
  } );
} );