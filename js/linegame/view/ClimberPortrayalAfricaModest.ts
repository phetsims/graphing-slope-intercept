// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import ClimberPortrayal from '../../../../graphing-lines/js/linegame/view/ClimberPortrayal.js';
import level1_svg from '../../../../graphing-lines/images/africa/level1_svg.js';
import level3_svg from '../../../../graphing-lines/images/africa/level3_svg.js';
import level5_svg from '../../../../graphing-lines/images/africa/level5_svg.js';
import level6_svg from '../../../../graphing-lines/images/africa-modest/level6_svg.js';

const africaModestStringProperty = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty;

const ClimberPortrayalAfricaModest = new ClimberPortrayal(
  AFRICA_MODEST_REGION_AND_CULTURE_ID,
  africaModestStringProperty,
  level1_svg,
  level3_svg,
  level5_svg,
  level6_svg
);

export default ClimberPortrayalAfricaModest;