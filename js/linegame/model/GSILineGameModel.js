// Copyright 2017, University of Colorado Boulder

/**
 * Model for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BaseGameModel = require( 'GRAPHING_LINES/linegame/model/BaseGameModel' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var GSIChallengeFactory1 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory1' );
  var GSIChallengeFactory2 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory2' );
  var GSIChallengeFactory3 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory3' );
  var GSIChallengeFactory4 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory4' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function GSILineGameModel() {

    // a challenge factory for each level
    var challengeFactories = [
      new GSIChallengeFactory1(),
      new GSIChallengeFactory2(),
      new GSIChallengeFactory3(),
      new GSIChallengeFactory4()
    ];

    BaseGameModel.call( this, challengeFactories );
  }

  graphingSlopeIntercept.register( 'GSILineGameModel', GSILineGameModel );


  return inherit( BaseGameModel, GSILineGameModel );
} );
