// Copyright 2017-2019, University of Colorado Boulder

/**
 * Model for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const BaseGameModel = require( 'GRAPHING_LINES/linegame/model/BaseGameModel' );
  const graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  const GSIChallengeFactory1 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory1' );
  const GSIChallengeFactory2 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory2' );
  const GSIChallengeFactory3 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory3' );
  const GSIChallengeFactory4 = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSIChallengeFactory4' );

  class GSILineGameModel extends BaseGameModel {

    constructor() {

      // a challenge factory for each level
      const challengeFactories = [
        new GSIChallengeFactory1(),
        new GSIChallengeFactory2(),
        new GSIChallengeFactory3(),
        new GSIChallengeFactory4()
      ];

      super( challengeFactories );
    }
  }

  return graphingSlopeIntercept.register( 'GSILineGameModel', GSILineGameModel );
} );
