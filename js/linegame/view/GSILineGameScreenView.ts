// Copyright 2017-2023, University of Colorado Boulder

/**
 * View for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import level1_svg from '../../../../graphing-lines/images/usa/level1_svg.js';
import level3_svg from '../../../../graphing-lines/images/usa/level3_svg.js';
import level5_svg from '../../../../graphing-lines/images/usa/level5_svg.js';
import level6_svg from '../../../../graphing-lines/images/usa/level6_svg.js';
import BaseGameScreenView from '../../../../graphing-lines/js/linegame/view/BaseGameScreenView.js';
import GLRewardNode from '../../../../graphing-lines/js/linegame/view/GLRewardNode.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import GSIQueryParameters, { NUMBER_OF_GAME_LEVELS } from '../../GSIQueryParameters.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';
import GSILineGameModel from '../model/GSILineGameModel.js';

export default class GSILineGameScreenView extends BaseGameScreenView {

  public constructor( model: GSILineGameModel, tandem: Tandem ) {

    // Images for the level-selection buttons, ordered by level. Note that this reuses images from graphing-lines,
    // but assigns them to different levels than their file names indicate.
    const levelImages = [ level1_svg, level3_svg, level5_svg, level6_svg ];
    assert && assert( levelImages.length === NUMBER_OF_GAME_LEVELS );

    // functions that create nodes for the game reward, ordered by level
    const rewardNodeFunctions = [
      GLRewardNode.createGraphNodes,
      GLRewardNode.createPointToolNodes,
      GLRewardNode.createPaperAirplaneNodes,
      GLRewardNode.createSmileyFaceNodes
    ];
    assert && assert( rewardNodeFunctions.length === NUMBER_OF_GAME_LEVELS );

    super( model, GSIQueryParameters.gameLevels, levelImages, rewardNodeFunctions, tandem );
  }
}

graphingSlopeIntercept.register( 'GSILineGameScreenView', GSILineGameScreenView );