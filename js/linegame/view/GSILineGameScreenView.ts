// Copyright 2017-2024, University of Colorado Boulder

/**
 * View for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BaseGameScreenView from '../../../../graphing-lines/js/linegame/view/BaseGameScreenView.js';
import GLRewardNode from '../../../../graphing-lines/js/linegame/view/GLRewardNode.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import GSIQueryParameters, { NUMBER_OF_GAME_LEVELS } from '../../GSIQueryParameters.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';
import GSILineGameModel from '../model/GSILineGameModel.js';
import ClimberCharacters from '../../../../graphing-lines/js/linegame/view/ClimberCharacters.js';
import ClimberImages from './ClimberImages.js';
import TReadOnlyProperty from '../../../../axon/js/TReadOnlyProperty.js';
import RegionAndCulturePortrayal from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';

export default class GSILineGameScreenView extends BaseGameScreenView {

  public constructor( model: GSILineGameModel,
                      regionAndCulturePortrayalProperty: TReadOnlyProperty<RegionAndCulturePortrayal>,
                      tandem: Tandem ) {

    // Images for the level-selection buttons, ordered by level. Note that this reuses images from graphing-lines,
    // but assigns them to different levels than their file names indicate.
    const climberCharacters = new ClimberCharacters( regionAndCulturePortrayalProperty, ClimberImages );
    const levelImages = climberCharacters.climberNodes;
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