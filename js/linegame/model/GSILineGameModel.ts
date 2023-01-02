// Copyright 2017-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * Model for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BaseGameModel from '../../../../graphing-lines/js/linegame/model/BaseGameModel.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';
import GSIChallengeFactory1 from './GSIChallengeFactory1.js';
import GSIChallengeFactory2 from './GSIChallengeFactory2.js';
import GSIChallengeFactory3 from './GSIChallengeFactory3.js';
import GSIChallengeFactory4 from './GSIChallengeFactory4.js';

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

graphingSlopeIntercept.register( 'GSILineGameModel', GSILineGameModel );
export default GSILineGameModel;