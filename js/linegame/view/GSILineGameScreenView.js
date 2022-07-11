// Copyright 2017-2021, University of Colorado Boulder

/**
 * View for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import level1_png from '../../../../graphing-lines/images/level1_png.js';
import level3_png from '../../../../graphing-lines/images/level3_png.js';
import level5_png from '../../../../graphing-lines/images/level5_png.js';
import level6_png from '../../../../graphing-lines/images/level6_png.js';
import BaseGameScreenView from '../../../../graphing-lines/js/linegame/view/BaseGameScreenView.js';
import GLRewardNode from '../../../../graphing-lines/js/linegame/view/GLRewardNode.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';

class GSILineGameScreenView extends BaseGameScreenView {

  /**
   * @param {LineGameModel} model
   */
  constructor( model ) {

    // Images for the level-selection buttons, ordered by level. Note that this reuses images from graphing-lines,
    // but assigns them to different levels than their file names indicate.
    const levelImages = [ level1_png, level3_png, level5_png, level6_png ];

    // functions that create nodes for the game reward, ordered by level
    const rewardFactoryFunctions = [
      GLRewardNode.createGraphNodes,
      GLRewardNode.createPointToolNodes,
      GLRewardNode.createPaperAirplaneNodes,
      GLRewardNode.createSmileyFaceNodes
    ];

    super( model, levelImages, rewardFactoryFunctions );
  }
}

graphingSlopeIntercept.register( 'GSILineGameScreenView', GSILineGameScreenView );
export default GSILineGameScreenView;