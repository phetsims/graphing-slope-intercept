// Copyright 2017-2020, University of Colorado Boulder

/**
 * View for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import level1Image from '../../../../graphing-lines/images/level1_png.js';
import level3Image from '../../../../graphing-lines/images/level3_png.js';
import level5Image from '../../../../graphing-lines/images/level5_png.js';
import level6Image from '../../../../graphing-lines/images/level6_png.js';
import BaseGameScreenView from '../../../../graphing-lines/js/linegame/view/BaseGameScreenView.js';
import GLRewardNode from '../../../../graphing-lines/js/linegame/view/GLRewardNode.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';

class GSILineGameScreenView extends BaseGameScreenView {

  /**
   * @param {LineGameModel} model
   */
  constructor( model ) {

    // A single row of level-selection buttons, ordered by level.
    // Uses level images from graphing-lines, assigns them to different levels than their file names indicate.
    const levelImages = [ [ level1Image, level3Image, level5Image, level6Image ] ];

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