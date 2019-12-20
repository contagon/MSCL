NDContentPage.OnToolTipsLoaded({299:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype299\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection</div></div></div><div class=\"TTSummary\">The Connection object that is used for communication.</div></div>",1032:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1032\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PositionOffset</div></div></div><div class=\"TTSummary\">Represents a position offset (x, y, z).</div></div>",1279:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The model numbers for each of the Inertial Nodes.</div></div>",1311:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1311\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EulerAngles</div></div></div><div class=\"TTSummary\">Represents generic Euler Angles (roll, pitch, yaw).</div></div>",1447:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enum for possible GPS dynamics modes.</div></div>",1449:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Dictates whether GNSS source is internal or external.</div></div>",1462:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The available device selectors.</div></div>",1465:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The available device power states.</div></div>",1470:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The available device data stream formats.</div></div>",1549:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A string composing the RTCM message.</div></div>",1551:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1551\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Matrix_3x3</div></div></div><div class=\"TTSummary\">Defines a 3 by 3 matrix.</div></div>",1563:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Defines a 3 dimensional, spatial vector.</div></div>",1583:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1583\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeUpdate</div></div></div><div class=\"TTSummary\">Contains time data for the GNSS_AssistTimeUpdate class.</div></div>",1594:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the AngularRateZUPTControl and VelocityZUPTControl classes.</div></div>",1600:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for Set Reference Position command.</div></div>",1607:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the SBASSettings class.</div></div>",1625:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setConstellationSettings API call.</div></div>",1630:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setAdvancedLowPassFilterSettings API call.</div></div>",1646:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data needed by the InertialNode::setComplementaryFilterSettings class.</div></div>",1688:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1688\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceStatusData</div></div></div><div class=\"TTSummary\">Contains the data needed by the InertialNode::getBasicDeviceStatus method.</div></div>",1744:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data needed by the InertialNode::sendExternalGNSSUpdate method.</div></div>",1760:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the possible sources of aiding heading updates to the Kalman filter.&nbsp; Some, all, or none of the options can be set as heading aids.</div></div>",1769:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the possible axis bitfield values.</div></div>",1786:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Controls which parameters are estimated by the Kalman Filter.&nbsp; Some, all, or none of the options can be set as estimation controls.</div></div>",1865:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1865\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",1874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1874\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the InertialNode (ie. &quot;6225-01319&quot;).</div></div>",1883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1883\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",1885:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1885\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",1992:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1992\" class=\"NDPrototype NoParameterForm\">FixedReferencePositionData getFixedReferencePosition()</div><div class=\"TTSummary\">Gets the FixedReferencePositionData data for the specified command.</div></div>",2094:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2094\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPacket</div></div></div><div class=\"TTSummary\">A Mip Data Packet that contains both valid and invalid data from a MIP Device.</div></div>",2120:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2120\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a GenericMipCommand.</div></div>",2182:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2182\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeInfo</div></div></div><div class=\"TTSummary\">Contains basic information about a MipNode.</div></div>",2198:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2198\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",2217:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different data classes of MIP data.</div></div>",2232:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent different time categories.</div></div>",2469:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains an &lt;Command&gt; id and a &lt;BytesCollection&gt; vector to store the actual bytes to send to the device for that command.</div></div>",2473:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2473\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannel</div></div></div><div class=\"TTSummary\">Represents a single &quot;channel&quot; or data descriptors that can make up an Inertial Device\'s message format</div></div>",2780:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2780\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNode_Impl</div></div></div><div class=\"TTSummary\">Contains the implementation for an InertialNode.</div></div>",5836:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5836\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",7404:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7404\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ByteStream</div></div></div><div class=\"TTSummary\">A stream of bytes that is used to easily store and retrieve data</div></div>",7452:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7452\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Version</div></div></div><div class=\"TTSummary\">Class that represents, and provides helper functions for, a Version number</div></div>",7537:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a 2-byte unsigned integer.</div></div>",7566:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible states a device can be in.</div></div>",7573:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7573\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Timestamp</div></div></div><div class=\"TTSummary\">Represents a date/time object</div></div>",7741:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7741\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error</div></div></div><div class=\"TTSummary\">The generic MicroStrain exception (base class)</div></div>",7748:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7748\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",7752:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7752\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",7763:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7763\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",7774:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7774\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",7792:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7792\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_MipCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>"});