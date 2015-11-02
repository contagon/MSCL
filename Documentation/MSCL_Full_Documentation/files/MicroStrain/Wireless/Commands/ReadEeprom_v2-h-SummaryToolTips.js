NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/ReadEeprom_v2.h",{1376:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1376\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ReadEeprom_v2</div></div></div><div class=\"TTSummary\">Contains logic for the ReadEeprom (version 2) Node command</div></div>",1378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1378\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the ReadEeprom command packet</div></div>",1379:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1379\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the ReadEeprom Node command</div></div>",1381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1381\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a EepromRead Response object</div></div>",1383:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1383\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the ReadEeprom response.</div></div>",1384:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1384\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_eepromAddress</div><div class=\"TTSummary\">The eeprom address to look for in the ReadEeprom response.</div></div>",1385:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1385\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_eepromValue</div><div class=\"TTSummary\">The result eeprom value from the command.</div></div>",1386:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1386\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode m_errorCode</div><div class=\"TTSummary\">The WirelessPacket::ResponseErrorCode from the response.</div></div>",1388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1388\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes.</div></div>",1389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1389\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> eepromValue() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the result eeprom value that was read from the Node.</div></div>",1390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1390\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode errorCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessPacket::ResponseErrorCode from the response packet.</div></div>",1391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1391\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the success response.</div></div>",1392:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1392\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchFailResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the failure response.</div></div>"});