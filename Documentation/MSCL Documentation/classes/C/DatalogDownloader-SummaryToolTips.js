NDSummary.OnToolTipsLoaded("CClass:DatalogDownloader",{7408:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7408\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DatalogDownloader</div></div></div><div class=\"TTSummary\">Used to download logged data from a WirelessNode.</div></div>",7410:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7410\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DatalogDownloader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DatalogDownloader object. Datalogging information will immediately be read from the Node.</div></div>",7411:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7411\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DatalogDownloader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">startAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Advanced Constructor for creating a DatalogDownloader object with known parameters (not compatible with datalog version 1).&nbsp; Note: In most cases, you should use the standard DatalogDownloader constructor instead of this one, which will automatically determine the start and end positions for you.</div></div>",7418:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7418\" class=\"NDPrototype NoParameterForm\">WirelessNode m_node</div><div class=\"TTSummary\">The WirelessNode to download the data from.</div></div>",7419:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7419\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_foundFirstTrigger</div><div class=\"TTSummary\">Whether or not the first trigger has been found.</div></div>",7420:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7420\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_outOfMemory</div><div class=\"TTSummary\">Whether or not we requested data that is out of bounds of the memory.</div></div>",7421:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7421\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_sweepCount</div><div class=\"TTSummary\">The 0-based count indicating which sweep we are currently on in the data.</div></div>",7422:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7422\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;NodeMemory&gt; m_nodeMemory</div><div class=\"TTSummary\">The NodeMemory object to help with interacting with the Node\'s datalogging memory.</div></div>",7423:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7423\" class=\"NDPrototype NoParameterForm\">DatalogSessionInfo m_sessionInfo</div><div class=\"TTSummary\">The &lt;DatalogSessionInfo&gt; containing information about the current trigger session data.</div></div>",7424:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The version of the datalog download procedure to use.</div></div>",7425:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7425\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_isMathData</div><div class=\"TTSummary\">Whether the data to parse next is math data (true) or standard channel data (false).</div></div>",7426:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">A vector of the &lt;WirelessDataPacket::AlgorithmMetaData&gt; for the current data section (gets updated each math block header).</div></div>",7428:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7428\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseTriggerHeader_v1()</div><div class=\"TTSummary\">Parses a (v1) trigger header from the current byte position. The current datalogging session info in this class is updated.</div></div>",7429:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7429\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseTriggerHeader_v2()</div><div class=\"TTSummary\">Parses a (v2) trigger header from the current byte position. The current datalogging session info in this class is updated.</div></div>",7430:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7430\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep parseNextSweep()</div><div class=\"TTSummary\">Parses the next Raw Data Sweep from the current byte position.</div></div>",7431:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7431\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep parseNextMathSweep()</div><div class=\"TTSummary\">Parses the next Math/Derived Data Sweep from the current byte position.</div></div>",7432:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7432\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> complete()</div><div class=\"TTSummary\">Checks if all of the data has been downloaded (no more data available).&nbsp; Note: This may be updated each time getNextData is called.</div></div>",7433:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7433\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentComplete() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the percent completion of the download.&nbsp; Note: This will be updated each time getNextData is called.</div></div>",7434:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7434\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep getNextData()</div><div class=\"TTSummary\">Gets the next LoggedDataSweep that is logged to the Node.</div></div>",7435:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7435\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> metaDataUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the any of the meta data (sample rate, cal coefficients, etc) has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData), signifying that you should interrogate all of the meta data on this DatalogDownloader object again to get updated information which may have changed.</div></div>",7436:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7436\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calCoefficientsUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the calibration coefficients information has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData).</div></div>",7437:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7437\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfSession() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether a new datalogging session has been found (after calling getNextData). This will be true for a single LoggedDataSweep.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",7438:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7438\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> sessionIndex() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the index of the current datalogging session.&nbsp; Note: May be changed whenever startOfSession returns true.</div></div>",7439:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7439\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SampleRate of the current datalogging session.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",7440:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7440\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; userString() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the user entered string of the current datalogging session (if any).&nbsp; Note: A user string can only be provided with Armed Datalogging, which is a legacy sampling mode not supported on new products.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",7441:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7441\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelCalMap&amp; calCoefficients() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the &lt;ChannelCalMap&gt; of the current datalogging session.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>"});