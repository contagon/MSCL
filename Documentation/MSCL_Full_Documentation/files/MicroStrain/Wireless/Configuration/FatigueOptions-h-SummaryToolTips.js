NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/FatigueOptions.h",{1945:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1945\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SnCurveSegment</div></div></div><div class=\"TTSummary\">Represents a single segment of an SN-Curve.</div></div>",1947:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1947\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SnCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">m,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">loga</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an SnCurveSegment.</div></div>",1949:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1949\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_m</div><div class=\"TTSummary\">The m value of the segment.</div></div>",1950:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1950\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_loga</div><div class=\"TTSummary\">The logA value of the segment.</div></div>",1952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1952\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the m value of the segment.</div></div>",1953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1953\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> m(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the m value of the segment.</div></div>",1954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1954\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> logA() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the logA value of the segment.</div></div>",1955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1955\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> logA(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the logA value of the segment.</div></div>",1957:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of angle IDs (uint8) to damage angles (float).</div></div>",1958:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of segment IDs (uint8) to SnCurveSegment objects.</div></div>",1959:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1959\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",1961:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1961\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_youngsModulus</div><div class=\"TTSummary\">The Young\'s Modulus value.</div></div>",1962:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1962\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_poissonsRatio</div><div class=\"TTSummary\">The Poisson\'s Ratio value.</div></div>",1963:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1963\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_peakValleyThreshold</div><div class=\"TTSummary\">The peak/valley threshold.</div></div>",1964:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1964\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_debugMode</div><div class=\"TTSummary\">Whether raw data is enabled or disabled.</div></div>",1965:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1965\" class=\"NDPrototype NoParameterForm\">DamageAngles m_damageAngles</div><div class=\"TTSummary\">The DamageAngles.</div></div>",1966:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1966\" class=\"NDPrototype NoParameterForm\">SnCurveSegments m_snCurveSegments</div><div class=\"TTSummary\">The SnCurveSegments.</div></div>",1967:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1967\" class=\"NDPrototype NoParameterForm\">WirelessTypes::FatigueMode m_fatigueMode</div><div class=\"TTSummary\">Whether distributed angle mode is enabled or disabled.</div></div>",1968:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1968\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_distMode_numAngles</div></div>",1969:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1969\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_distMode_lowerBound</div><div class=\"TTSummary\">The lower bound angle when using the distributed angle mode.</div></div>",1970:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1970\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_distMode_upperBound</div><div class=\"TTSummary\">The upper bound angle when using the distributed angle mode.</div></div>",1971:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1971\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_histogramEnable</div><div class=\"TTSummary\">Whether histograms are enabled or disabled.</div></div>",1973:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1973\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> youngsModulus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Young\'s Modulus set in this options object.</div></div>",1974:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1974\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> youngsModulus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Young\'s Modulus in this options object.</div></div>",1975:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1975\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> poissonsRatio() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Poisson\'s Ration set in this options object.</div></div>",1976:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1976\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> poissonsRatio(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Poisson\'s Ratio in this options object.</div></div>",1977:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1977\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> peakValleyThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Peak/Valley Threshold set in this options object.</div></div>",1978:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1978\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> peakValleyThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Peak/Valley Threshold in this options object.</div></div>",1979:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1979\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> debugMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the debug mode flag set in this options object.&nbsp; This determines whether raw angle data that builds the Histograms will be sent when sampling.</div></div>",1980:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1980\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the debug mode flag in this options object.&nbsp; This determines whether raw angle data that builds the Histograms will be sent when sampling.</div></div>",1981:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1981\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> damageAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">angleId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the damage angle set in this options object, for the given angle id (0-based).</div></div>",1982:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1982\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> DamageAngles&amp; damageAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the DamageAngles container set in this options object.</div></div>",1983:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1983\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> damageAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">angleId,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the damage angle in this options object, for the given angle id (0-based).&nbsp; The angle will be automatically converted to between 0 and 360 if it is out of range.</div></div>",1984:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1984\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SnCurveSegment&amp; snCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">segmentId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SnCurveSegment set in this options object, for the given segment id (0-based).</div></div>",1985:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1985\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SnCurveSegments&amp; snCurveSegments() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SnCurveSegments container set in this options object.</div></div>",1986:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1986\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> snCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">segmentId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SnCurveSegment&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">segment</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the SnCurveSegment in this options object, for the given segment id (0-based).</div></div>",1987:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1987\" class=\"NDPrototype NoParameterForm\">WirelessTypes::FatigueMode fatigueMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The WirelessTypes::FatigueMode that is set in this options object.</div></div>",1988:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets whether distributed angle mode is enabled or disabled in this options object.&nbsp; Distributed Angle Mode allows the user to enable an even distribution of 4-16 angles.&nbsp; When in this mode, the standard damageAngles will not be used by the Node.</div></div>",1989:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1989\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> distributedAngleMode_numAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current number of angles to use for distributed angle mode in this options object.&nbsp; Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",1990:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1990\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_numAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numAngles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current number of angles to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",1991:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1991\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> distributedAngleMode_lowerBound() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current lower bound angle (in degrees) to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",1992:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1992\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_lowerBound(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current lower bound angle to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.&nbsp; Note: The lower bound and upper bound angles must be at least 1 degree.</div></div>",1993:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1993\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> distributedAngleMode_upperBound() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current upper bound angle (in degrees) to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",1994:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1994\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_upperBound(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current upper bound angle to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.&nbsp; Note: The lower bound and upper bound angles must be at least 1 degree.</div></div>",1995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1995\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> histogramEnable() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether sending Histograms is enabled or disabled, in this options object.</div></div>",1996:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1996\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> histogramEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether sending Histograms is enabled or disabled, in this options object.</div></div>"});