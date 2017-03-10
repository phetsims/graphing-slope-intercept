// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 2 in the 'Graphing Slope-Intercept' sim.
 * Identical to Level 1, but with different sets of required slopes and y-intercepts.
 * See createSlopeArrays and createYInterceptArrays.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var Fraction = require( 'PHETCOMMON/model/Fraction' );
  var GLQueryParameters = require( 'GRAPHING_LINES/common/GLQueryParameters' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GraphTheLine = require( 'GRAPHING_LINES/linegame/model/GraphTheLine' );
  var GSIChallengeFactory1 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory1' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var MakeTheEquation = require( 'GRAPHING_LINES/linegame/model/MakeTheEquation' );
  var ManipulationMode = require( 'GRAPHING_LINES/linegame/model/ManipulationMode' );
  var RandomChooser = require( 'GRAPHING_LINES/linegame/model/RandomChooser' );
  var Range = require( 'DOT/Range' );

  /**
   * @constructor
   */
  function GSIChallengeFactory2() {
    GSIChallengeFactory1.call( this );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory2', GSIChallengeFactory2 );

  return inherit( GSIChallengeFactory1, GSIChallengeFactory2, {

    /**
     * Level 2 has a different set of required slopes, so override this function.
     * Creates the sets of slopes used for generating challenges.
     * @param {Range} xRange - range of the graph's x axis
     * @param {Range} yRange - range of the graph's y axis
     * @returns {Fraction[][]}
     * @public
     * @override
     */
    createSlopeArrays: function( xRange, yRange ) {
      return [
        // positive and negative integers
        [
          new Fraction( 1, 1 ),
          new Fraction( 2, 1 ),
          new Fraction( 3, 1 ),
          new Fraction( 4, 1 ),
          new Fraction( 5, 1 ),
          new Fraction( -1, 1 ),
          new Fraction( -2, 1 ),
          new Fraction( -3, 1 ),
          new Fraction( -4, 1 ),
          new Fraction( -5, 1 )
        ],
        // positive fractions
        this.createPositiveFractionalSlopes(),
        // negative fractions
        [
          new Fraction( -1, 2 ),
          new Fraction( -1, 3 ),
          new Fraction( -1, 4 ),
          new Fraction( -1, 5 ),
          new Fraction( -2, 3 ),
          new Fraction( -3, 4 ),
          new Fraction( -2, 5 ),
          new Fraction( -3, 5 ),
          new Fraction( -4, 5 ),
          new Fraction( -3, 2 ),
          new Fraction( -4, 3 ),
          new Fraction( -5, 2 ),
          new Fraction( -5, 3 ),
          new Fraction( -5, 4 )
        ]
      ];
    },

    /**
     * Creates the set of positive fractional slopes that are identified in the Graphing Lines design document.
     * @returns {Fraction[]}
     * @public
     */
    createPositiveFractionalSlopes: function() {
      return [
        // positive fractions
        new Fraction( 1, 4 ),
        new Fraction( 1, 5 ),
        new Fraction( 1, 6 ),
        new Fraction( 1, 7 ),
        new Fraction( 2, 5 ),
        new Fraction( 3, 5 ),
        new Fraction( 2, 7 ),
        new Fraction( 3, 7 ),
        new Fraction( 4, 7 ),
        new Fraction( 5, 2 ),
        new Fraction( 3, 2 ),
        new Fraction( 7, 2 ),
        new Fraction( 7, 3 ),
        new Fraction( 7, 4 )
      ];
    },

    /**
     * Level 2 has a different set of required y-intercepts, so override this function.
     * Creates the sets of y-intercepts used for generating challenges.
     * @param {Range} yRange - range of the graph's y axis
     * @returns {number[][]}
     * @protected
     * @override
     */
    createYInterceptArrays: function( yRange ) {
      return [
        RandomChooser.rangeToArray( new Range( yRange.min, -1 ) ),
        RandomChooser.rangeToArray( new Range( 1, yRange.max ) )
      ];
    }
  } );
} );