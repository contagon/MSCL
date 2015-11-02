NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/NodeEeprom.h",{1798:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">The settings for the NodeEeprom object.</div></div>",1800:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1800\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useGroupRead</div><div class=\"TTSummary\">Whether to use group eeprom read or not.</div></div>",1801:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1801\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> numRetries</div><div class=\"TTSummary\">The number of retries to use for reading and writing.</div></div>",1802:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1802\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useEepromCache</div><div class=\"TTSummary\">Whether to use the eeprom cache for reads and writes.</div></div>",1803:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1803\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeEeprom</div></div></div><div class=\"TTSummary\">Used to read and write to Wireless Nodes\' eeproms and provide caching functionality.</div></div>",1805:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1805\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">NodeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">base,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessProtocol&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">protocol,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NodeEepromSettings&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Eeprom object.</div></div>",1807:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1807\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The address of the WirelessNode to access the eeprom of.</div></div>",1808:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1808\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The BaseStation to use for communication with the Node.</div></div>",1809:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1809\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_useGroupRead</div><div class=\"TTSummary\">Whether we can use a group eeprom read when reading from eeprom.</div></div>",1810:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1810\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessProtocol* m_protocol</div><div class=\"TTSummary\">The WirelessProtocol that is supported by the Node.</div></div>",1812:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1812\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> updateCacheFromDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Attempts to update the cache by reading the value from the Node with the nodeAddress given at initialization.&nbsp; Any values that are read from the Node will be updated in the cache.</div></div>",1813:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1813\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseEepromPage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pageData,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">pageIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses a page download result containing eeprom values.&nbsp; The eeprom cache will be updated with all the parsed values.</div></div>",1814:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1814\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NodeEepromSettings&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the settings for this eeprom object.</div></div>",1815:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1815\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">base</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the BaseStation object that is set for use in communicating with the Node.</div></div>",1816:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1816\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from the Node.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the Node.</div></div>",1817:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1817\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to the Node.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the Node and this function will have no affect.</div></div>"});