NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/BaseStationEepromHelper.h",{2079:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2079\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationEepromHelper</div></div></div><div class=\"TTSummary\">A helper class for reading and writing to a BaseStation\'s Eeprom.&nbsp; This class provides eeprom specific parsing so that high-level objects can be converted to their low-level eeprom value equivelent and vice-versa.</div></div>",2081:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2081\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationEepromHelper(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStation_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationEepromHelper object with a BaseStation.</div></div>",2082:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2082\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> checkAnalogPairingSupported() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks that analog pairing is supported and throws an exception if it isn\'t.</div></div>",2084:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2084\" class=\"NDPrototype NoParameterForm\">BaseStation_Impl* m_baseStation</div><div class=\"TTSummary\">The BaseStation_Impl used by this eeprom helper.</div></div>",2086:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2086\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower read_transmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the BaseStation.</div></div>",2087:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2087\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_transmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the WirelessTypes::TransmitPower to the BaseStation.</div></div>",2088:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2088\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton read_button(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\">BaseStationButton::</td><td class=\"PType\">UserAction&nbsp;</td><td class=\"PName last\">action</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the current settings for a particular button and action as a BaseStationButton.</div></div>",2089:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2089\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_button(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\">BaseStationButton::</td><td class=\"PType\">UserAction&nbsp;</td><td></td><td class=\"PName last\">action,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">btn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the BaseStationButton to the BaseStation for a particular button and action.</div></div>",2090:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2090\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> read_analogPairingEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the setting for if analog pairing is enabled.</div></div>",2091:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2091\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogPairingEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog pairing enable setting to the BaseStation.</div></div>",2092:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2092\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> read_analogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the analog timeout time in seconds.</div></div>",2093:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2093\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogTimeoutTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog timeout time to the BaseStation.</div></div>",2094:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2094\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> read_analogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the analog timeout voltage.</div></div>",2095:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2095\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogTimeoutVoltage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">voltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog timeout voltage to the BaseStation.</div></div>",2096:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2096\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> read_analogExceedanceEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the setting for if analog exceedance is enabled.</div></div>",2097:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2097\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogExceedanceEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog exceedance enable setting to the BaseStation.</div></div>",2098:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2098\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair read_analogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the current settings for a particular analog pairing as a BaseStationAnalogPair.</div></div>",2099:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2099\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">portNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationAnalogPair&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pair</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the BaseStationAnalogPair to the BaseStation for a particular port number.</div></div>",2100:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2100\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode read_regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the region code from the BaseStation.</div></div>"});