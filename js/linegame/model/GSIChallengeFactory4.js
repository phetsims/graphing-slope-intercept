// Copyright 2017, University of Colorado Boulder

/**
 * Creates game challenges for Level 4 in the 'Graphing Slope-Intercept' sim.
 * Identical to level 3, except with different Place-the-Point challenges.
 * See createPlaceThePointChallenges.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationForm = require( 'GRAPHING_LINES/linegame/model/EquationForm' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GSIChallengeFactory3 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory3' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var PlaceThePoints = require( 'GRAPHING_LINES/linegame/model/PlaceThePoints' );
  var RandomChooser = require( 'GRAPHING_LINES/linegame/model/RandomChooser' );

  /**
   * @constructor
   */
  function GSIChallengeFactory4() {
    GSIChallengeFactory3.call( this );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory4', GSIChallengeFactory4 );

  return inherit( GSIChallengeFactory3, GSIChallengeFactory4, {

    /**
     * Creates place-the-point challenges for this level.
     * @param {Range} xRange
     * @param {Range} yRange
     * @returns {PlaceThePoints[]}
     * @protected
     */
    createPlaceThePointChallenges: function( xRange, yRange ) {

      var challenges = [];

      // CHALLENGE 5: slope=0, random y-intercept (exclude zero)
      var yInterceptArray = RandomChooser.rangeToArray( yRange, { excludeZero: true } ); // exclude zero
      var yIntercept = RandomChooser.choose( yInterceptArray );
      challenges.push( new PlaceThePoints( 'slope=0, random y-intercept',
        new Line( 0, yIntercept, 1, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        xRange, yRange ) );

      // CHALLENGE 6: slope=undefined, random x-intercept (exclude zero)
      var xInterceptArray = RandomChooser.rangeToArray( xRange, { excludeZero: true } ); // exclude zero
      var xIntercept = RandomChooser.choose( xInterceptArray );
      challenges.push( new PlaceThePoints( 'slope=undefined, random x-intercept',
        new Line( xIntercept, 0, xIntercept, 1 ),
        EquationForm.SLOPE_INTERCEPT,
        xRange, yRange ) );

      return challenges;
    }
  } );
} );