NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/FatigueOptions.h",{514:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype514\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SnCurveSegment</div></div></div><div class=\"TTSummary\">Represents a single segment of an SN-Curve.</div></div>",515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype515\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SnCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">m,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">loga</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an SnCurveSegment.</div></div>",516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype516\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the m value of the segment.</div></div>",517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype517\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> m(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the m value of the segment.</div></div>",518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype518\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> logA() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the logA value of the segment.</div></div>",519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype519\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> logA(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the logA value of the segment.</div></div>",520:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of angle IDs (uint8) to damage angles (float).</div></div>",521:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of segment IDs (uint8) to SnCurveSegment objects.</div></div>",522:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype522\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype523\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> youngsModulus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Young\'s Modulus set in this options object.</div></div>",524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype524\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> youngsModulus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Young\'s Modulus in this options object.</div></div>",525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype525\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> poissonsRatio() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Poisson\'s Ration set in this options object.</div></div>",526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype526\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> poissonsRatio(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Poisson\'s Ratio in this options object.</div></div>",527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype527\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> peakValleyThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Peak/Valley Threshold set in this options object.</div></div>",528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype528\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> peakValleyThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Peak/Valley Threshold in this options object.</div></div>",529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype529\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> debugMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the debug mode flag set in this options object.&nbsp; This determines whether raw angle data that builds the Histograms will be sent when sampling.</div></div>",530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype530\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> debugMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the debug mode flag in this options object.&nbsp; This determines whether raw angle data that builds the Histograms will be sent when sampling.</div></div>",531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype531\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> damageAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">angleId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the damage angle set in this options object, for the given angle id (0-based).</div></div>",532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype532\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> DamageAngles&amp; damageAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the DamageAngles container set in this options object.</div></div>",533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype533\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> damageAngle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">angleId,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the damage angle in this options object, for the given angle id (0-based).&nbsp; The angle will be automatically converted to between 0 and 360 if it is out of range.</div></div>",534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype534\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SnCurveSegment&amp; snCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">segmentId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SnCurveSegment set in this options object, for the given segment id (0-based).</div></div>",535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype535\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SnCurveSegments&amp; snCurveSegments() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SnCurveSegments container set in this options object.</div></div>",536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype536\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> snCurveSegment(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">segmentId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SnCurveSegment&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">segment</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the SnCurveSegment in this options object, for the given segment id (0-based).</div></div>",537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype537\" class=\"NDPrototype NoParameterForm\">WirelessTypes::FatigueMode fatigueMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The WirelessTypes::FatigueMode that is set in this options object.</div></div>",538:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets whether distributed angle mode is enabled or disabled in this options object.&nbsp; Distributed Angle Mode allows the user to enable an even distribution of 4-16 angles.&nbsp; When in this mode, the standard damageAngles will not be used by the Node.</div></div>",539:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype539\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> distributedAngleMode_numAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current number of angles to use for distributed angle mode in this options object.&nbsp; Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype540\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_numAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numAngles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current number of angles to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype541\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> distributedAngleMode_lowerBound() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current lower bound angle (in degrees) to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype542\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_lowerBound(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current lower bound angle to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.&nbsp; Note: The lower bound and upper bound angles must be at least 1 degree.</div></div>",543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype543\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> distributedAngleMode_upperBound() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current upper bound angle (in degrees) to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.</div></div>",544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype544\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> distributedAngleMode_upperBound(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current upper bound angle to use for distributed angle mode in this options object.&nbsp; Note: Note: The Node will only use this if the fatigueMode is set to distributed angle mode.&nbsp; Note: The lower bound and upper bound angles must be at least 1 degree.</div></div>",545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype545\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> histogramEnable() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether sending Histograms is enabled or disabled, in this options object.</div></div>",546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype546\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> histogramEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether sending Histograms is enabled or disabled, in this options object.</div></div>"});