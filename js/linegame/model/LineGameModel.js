// Copyright 2017, University of Colorado Boulder

/**
 * Model for the 'Line Game' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BaseGameModel = require( 'GRAPHING_LINES/linegame/model/BaseGameModel' );
  var ChallengeFactory1 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/ChallengeFactory1' );
  var ChallengeFactory2 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/ChallengeFactory2' );
  var ChallengeFactory3 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/ChallengeFactory3' );
  var ChallengeFactory4 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/ChallengeFactory4' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function LineGameModel() {

    // a challenge factory for each level
    var challengeFactories = [
      new ChallengeFactory1(),
      new ChallengeFactory2(),
      new ChallengeFactory3(),
      new ChallengeFactory4()
    ];

    BaseGameModel.call( this, challengeFactories );
  }

  graphingSlopeIntercept.register( 'LineGameModel', LineGameModel );


  return inherit( BaseGameModel, LineGameModel );
} );
