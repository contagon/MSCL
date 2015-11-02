NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/InertialNode.h",{274:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype274\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain Inertial Node</div></div>",275:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype275\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> InertialNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PName last\">connection</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an InertialNode object.</div></div>",276:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype276\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> InertialNodeInfo&amp; info()</div><div class=\"TTSummary\">Gets InertialNodeInfo for this Node.&nbsp; The first time this function is called, it will send multiple commands to the device to get all required information.&nbsp; Note: This will be invalid when the InertialNode is destroyed.</div></div>",277:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype277\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> InertialNodeFeatures&amp; features()</div><div class=\"TTSummary\">Gets a reference to the InertialNodeFeatures for this device.&nbsp; Note: This will be invalid when the InertialNode is destroyed.</div></div>",278:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype278\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",279:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype279\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the InertialNode.</div></div>",280:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype280\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for an InertialTypes::InertialCategory.</div></div>",281:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype281\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialDataPacket getNextDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next InertialDataPacket containing sampled data sent from this Inertial device.&nbsp; See the getDataPackets function for getting all available data packets that are in the buffer.</div></div>",282:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype282\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialDataPackets getDataPackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data packets that have been collected.</div></div>",283:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype283\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of data packets that are currently in the buffer.</div></div>",284:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype284\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> commandsTimeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from Inertial commands.</div></div>",285:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype285\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name()</div><div class=\"TTSummary\">Gets the name of the InertialNode. This is the universal sensor name that should be used for uploading to SensorCloud.&nbsp; This is the same as calling InertialNode::deviceName.</div></div>",286:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype286\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the Node to check for communication.&nbsp; Sends the &quot;Ping&quot; command to the device.</div></div>",287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype287\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype288\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",289:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype289\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> getDataRateBase(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the Data decimation base for the data rate calculations of the specified &lt;InertialType&gt;.</div></div>",290:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype290\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialChannels getActiveChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the current active channel fields for the specified InertialTypes::InertialCategory.</div></div>",291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype291\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setActiveChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td></td><td class=\"PName last\">category,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialChannels&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current active channel fields for the specified InertialTypes::InertialCategory.&nbsp; Note that this function does not add to the existing message format (active channels), but overwrites it entirely.</div></div>",292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype292\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCommunicationMode()</div><div class=\"TTSummary\">Gets the current communication mode that the node is in.</div></div>",293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype293\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setCommunicationMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">communicationMode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the communication mode for the node.&nbsp; Note: The node info will be reset when doing this and therefore will require being fetched again the next time it is requested.</div></div>",294:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype294\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enableDataStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">InertialTypes::</td><td class=\"PType\">InertialCategory&nbsp;</td><td class=\"PName\">category,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables continuous data streaming for the node.</div></div>",295:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype295\" class=\"NDPrototype NoParameterForm\">EulerAngles getSensorToVehicleTransformation()</div><div class=\"TTSummary\">Gets the sensor to vehicle frame transformation matrix using roll, pitch, and yaw Euler angles.&nbsp; These angles define the rotation from the sensor body from to the fixed vehicle frame.</div></div>",296:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype296\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setSensorToVehicleTransformation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sensor to vehicle frame transformation matrix using roll, pitch, and yaw Euler angles (in radians).&nbsp; These angles define the rotation from the sensor body from to the fixed vehicle frame.</div></div>",297:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype297\" class=\"NDPrototype NoParameterForm\">PositionOffset getSensorToVehicleOffset()</div><div class=\"TTSummary\">Gets the sensor to vehicle frame offset, expressed in the sensor frame.</div></div>",298:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype298\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setSensorToVehicleOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sensor to vehicle frame offset, expressed in the sensor frame.</div></div>",299:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype299\" class=\"NDPrototype NoParameterForm\">PositionOffset getAntennaOffset()</div><div class=\"TTSummary\">Gets the antenna offset, expressed in the sensor frame.</div></div>",300:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype300\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setAntennaOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the antenna offset, expressed in the sensor frame.</div></div>"});