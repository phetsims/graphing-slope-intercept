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
  var GSIChallengeFactory = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory' );
  var GSIChallengeFactory3 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory3' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'GRAPHING_LINES/common/model/Line' );
  var PlaceThePoints = require( 'GRAPHING_LINES/linegame/model/PlaceThePoints' );

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
     * Creates place-the-point challenges for this level.
     * @returns {PlaceThePoints[]}
     * @protected
     */
    createPlaceThePointChallenges: function() {

      var challenges = [];

      // CHALLENGE 5
      var yIntercepts = GSIChallengeFactory.rangeToArray( this.yRange, { excludeZero: true } );
      var yIntercept = GSIChallengeFactory.choose( yIntercepts );
      challenges.push( new PlaceThePoints( 'slope=0, random y-intercept (not zero)',
        new Line( 0, yIntercept, 1, yIntercept ),
        EquationForm.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      // CHALLENGE 6
      var xIntercepts = GSIChallengeFactory.rangeToArray( this.xRange, { excludeZero: true } );
      var xIntercept = GSIChallengeFactory.choose( xIntercepts );
      challenges.push( new PlaceThePoints( 'slope=undefined, random x-intercept (not zero)',
        new Line( xIntercept, 0, xIntercept, 1 ),
        EquationForm.SLOPE_INTERCEPT,
        this.xRange, this.yRange ) );

      return challenges;
    }
  } );
} );