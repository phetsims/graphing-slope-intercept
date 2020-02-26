// Copyright 2017-2020, University of Colorado Boulder

/**
 * View for the 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const BaseGameScreenView = require( 'GRAPHING_LINES/linegame/view/BaseGameScreenView' );
  const GLRewardNode = require( 'GRAPHING_LINES/linegame/view/GLRewardNode' );
  const graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );

  // images
  const level1Image = require( 'image!GRAPHING_LINES/Level_1.png' );
  const level3Image = require( 'image!GRAPHING_LINES/Level_3.png' );
  const level5Image = require( 'image!GRAPHING_LINES/Level_5.png' );
  const level6Image = require( 'image!GRAPHING_LINES/Level_6.png' );

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

  return graphingSlopeIntercept.register( 'GSILineGameScreenView', GSILineGameScreenView );
} );
