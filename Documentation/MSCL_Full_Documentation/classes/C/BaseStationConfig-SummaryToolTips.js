NDSummary.OnToolTipsLoaded("CClass:BaseStationConfig",{2110:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2110\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationConfig</div></div></div><div class=\"TTSummary\">Class used for setting the configuration of BaseStations.&nbsp; Set all the configuration values that you want to change, then verify and apply them to a BaseStation.</div></div>",2112:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2112\" class=\"NDPrototype NoParameterForm\">BaseStationConfig()</div><div class=\"TTSummary\">Creates a blank BaseStationConfig.</div></div>",2114:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2114\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;WirelessTypes::TransmitPower&gt; m_transmitPower</div><div class=\"TTSummary\">The WirelessTypes::TransmitPower to set.</div></div>",2115:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2115\" class=\"NDPrototype NoParameterForm\">ButtonMap m_btnsLongPress</div><div class=\"TTSummary\">The &lt;ButtonMap&gt; for long press actions.</div></div>",2116:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2116\" class=\"NDPrototype NoParameterForm\">ButtonMap m_btnsShortPress</div><div class=\"TTSummary\">The &lt;ButtonMap&gt; for short press actions.</div></div>",2117:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2117\" class=\"NDPrototype NoParameterForm\">AnalogPairMap m_analogPairs</div><div class=\"TTSummary\">The &lt;AnalogPairMap&gt; holding all analog pairs to set</div></div>",2118:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2118\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">bool</span>&gt; m_analogPairingEnable</div><div class=\"TTSummary\">The analog pairing enable master option to set.</div></div>",2119:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2119\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">uint16</span>&gt; m_analogTimeoutTime</div><div class=\"TTSummary\">The analog timeout time (in seconds) to set.</div></div>",2120:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2120\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">float</span>&gt; m_analogTimeoutVoltage</div><div class=\"TTSummary\">The analog timeout voltage to set.</div></div>",2121:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2121\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">bool</span>&gt; m_analogExceedanceEnable</div><div class=\"TTSummary\">The analog exceedance enable option to set.</div></div>",2123:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2123\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">void</span> checkValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::</td><td class=\"PType\">optional&lt;T&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">opt,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">valueName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Throws an exception if an optional value isn\'t set.</div></div>",2124:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2124\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">bool</span> isSet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::</td><td class=\"PType\">optional&lt;T&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">opt</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the optional value is set.</div></div>",2125:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2125\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verify(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationFeatures&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">features,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the current settings are ok to be written to a given BaseStation.</div></div>",2126:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2126\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> apply(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationFeatures&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">features,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Writes all of the configuration values that are set to a WirelessNode.</div></div>",2127:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2127\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower transmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::TransmitPower value in the Config, if set.</div></div>",2128:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2128\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> transmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::TransmitPower value in the Config.</div></div>",2129:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2129\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton buttonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationButton value in the Config for performing a long press on a specific button, if set.</div></div>",2130:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2130\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> buttonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BaseStationButton value in the Config for performing a short press on a specific button.</div></div>",2131:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2131\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton buttonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationButton value in the Config for performing a short press on a specific button, if set.</div></div>",2132:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2132\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> buttonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BaseStationButton value in the Config for performing a long press on a specific button.</div></div>",2133:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2133\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> analogPairingEnable() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Pairing Enabled value in the Config, if set.</div></div>",2134:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2134\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogPairingEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Pairing Enabled value in the Config.&nbsp; This controls whether all of the other analog pairing settings have any affect.</div></div>",2135:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2135\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> analogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Timeout Time value (in seconds) in the Config, if set.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",2136:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2136\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogTimeoutTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Timeout Time value (in seconds) in the Config.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",2137:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2137\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> analogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Timeout Voltage in the Config, if set.</div></div>",2138:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2138\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogTimeoutVoltage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">voltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Timeout Voltage in the Config.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",2139:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2139\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> analogExceedanceEnable()</div><div class=\"TTSummary\">Gets the Analog Exceedance Enabled value in the Config, if set.</div></div>",2140:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2140\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogExceedanceEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Exceedance Enabled value in the Config.</div></div>",2141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2141\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair analogPairing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationAnalogPair value in the Config for the specified port number, if set.</div></div>",2142:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets the BaseStationAnalogPair value in the Config for the specified port number.</div></div>"});