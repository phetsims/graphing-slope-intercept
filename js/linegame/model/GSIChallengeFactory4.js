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
  var ValuePool = require( 'GRAPHING_LINES/linegame/model/ValuePool' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function GSIChallengeFactory4( options ) {
    GSIChallengeFactory3.call( this, options );
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory4', GSIChallengeFactory4 );

  return inherit( GSIChallengeFactory3, GSIChallengeFactory4, {

    /**
     * Level 4 has a different set of place-the-point challenges, so override this function.
     * @returns {PlaceThePoints[]}
     * @protected
     * @override
     */
    createPlaceThePointChallenges: function() {

      var challenges = [];

      // CHALLENGE 5
      var yIntercepts = ValuePool.rangeToArray( this.yRange, { excludeZero: true } );
      var yIntercept = ValuePool.choose( yIntercepts );
      challenges.push( new PlaceThePoints(
        '5: PlaceThePoints, slope=0, random y-intercept (not zero)',
        new Line( 0, yIntercept, 1, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 6
      var xIntercepts = ValuePool.rangeToArray( this.xRange, { excludeZero: true } );
      var xIntercept = ValuePool.choose( xIntercepts );
      challenges.push( new PlaceThePoints(
        '6: PlaceThePoints, slope=undefined, random x-intercept (not zero)',
        new Line( xIntercept, 0, xIntercept, 1 ),
        EquationForm.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      return challenges;
    }
  } );
} );