// Copyright 2017-2022, University of Colorado Boulder

// @ts-nocheck
/**
 * The 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import GLColors from '../../../graphing-lines/js/common/GLColors.js';
import GLIconFactory from '../../../graphing-lines/js/common/view/GLIconFactory.js';
import GraphingLinesStrings from '../../../graphing-lines/js/GraphingLinesStrings.js';
import Screen from '../../../joist/js/Screen.js';
import merge from '../../../phet-core/js/merge.js';
import graphingSlopeIntercept from '../graphingSlopeIntercept.js';
import GSILineGameModel from './model/GSILineGameModel.js';
import GSILineGameScreenView from './view/GSILineGameScreenView.js';

class GSILineGameScreen extends Screen {

  /**
   * @param {Tandem} tandem
   * @param {Object} [options]
   */
  constructor( tandem, options ) {

    options = merge( {
      name: GraphingLinesStrings.screen.lineGameStringProperty,
      backgroundColorProperty: new Property( GLColors.SCREEN_BACKGROUND ),
      homeScreenIcon: GLIconFactory.createGameScreenIcon()
    }, options );

    assert && assert( !options.tandem, 'tandem is a constructor parameter' );
    options.tandem = tandem;

    super(
      () => new GSILineGameModel(),
      model => new GSILineGameScreenView( model ),
      options
    );
  }
}

graphingSlopeIntercept.register( 'GSILineGameScreen', GSILineGameScreen );
export default GSILineGameScreen;