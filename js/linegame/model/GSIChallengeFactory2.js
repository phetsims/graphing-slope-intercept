// Copyright 2017-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * Creates game challenges for Level 2 in the 'Graphing Slope-Intercept' sim.
 * Identical to Level 1, but with different sets of possible slopes and y-intercepts.
 * See createSlopeArrays and createYInterceptArrays.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Range from '../../../../dot/js/Range.js';
import ValuePool from '../../../../graphing-lines/js/linegame/model/ValuePool.js';
import Fraction from '../../../../phetcommon/js/model/Fraction.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';
import GSIChallengeFactory1 from './GSIChallengeFactory1.js';

class GSIChallengeFactory2 extends GSIChallengeFactory1 {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( options );
  }

  /**
   * Level 2 has a different set of possible slopes, so override this function.
   * Creates the sets of slopes used for generating challenges.
   * @returns {Fraction[][]}
   * @protected
   * @override
   */
  createSlopeArrays() {
    return [

      // positive and negative integers
      [
        new Fraction( 1, 1 ),
        new Fraction( 2, 1 ),
        new Fraction( 3, 1 ),
        new Fraction( 4, 1 ),
        new Fraction( 5, 1 ),
        new Fraction( -1, 1 ),
        new Fraction( -2, 1 ),
        new Fraction( -3, 1 ),
        new Fraction( -4, 1 ),
        new Fraction( -5, 1 )
      ],

      // positive fractions
      [
        new Fraction( 1, 4 ),
        new Fraction( 1, 5 ),
        new Fraction( 1, 6 ),
        new Fraction( 1, 7 ),
        new Fraction( 2, 5 ),
        new Fraction( 3, 5 ),
        new Fraction( 2, 7 ),
        new Fraction( 3, 7 ),
        new Fraction( 4, 7 ),
        new Fraction( 5, 2 ),
        new Fraction( 3, 2 ),
        new Fraction( 7, 2 ),
        new Fraction( 7, 3 ),
        new Fraction( 7, 4 )
      ],

      // negative fractions
      [
        new Fraction( -1, 2 ),
        new Fraction( -1, 3 ),
        new Fraction( -1, 4 ),
        new Fraction( -1, 5 ),
        new Fraction( -2, 3 ),
        new Fraction( -3, 4 ),
        new Fraction( -2, 5 ),
        new Fraction( -3, 5 ),
        new Fraction( -4, 5 ),
        new Fraction( -3, 2 ),
        new Fraction( -4, 3 ),
        new Fraction( -5, 2 ),
        new Fraction( -5, 3 ),
        new Fraction( -5, 4 )
      ]
    ];
  }

  /**
   * Level 2 has a different set of possible y-intercepts, so override this function.
   * Creates the sets of y-intercepts used for generating challenges.
   * @returns {number[][]}
   * @protected
   * @override
   */
  createYInterceptArrays() {
    return [
      ValuePool.rangeToArray( new Range( this.yRange.min, -1 ) ), // negative intercepts
      ValuePool.rangeToArray( new Range( 1, this.yRange.max ) )   // positive intercepts
    ];
  }
}

graphingSlopeIntercept.register( 'GSIChallengeFactory2', GSIChallengeFactory2 );
export default GSIChallengeFactory2;