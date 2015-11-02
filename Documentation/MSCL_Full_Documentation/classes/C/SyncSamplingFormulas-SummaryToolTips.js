NDSummary.OnToolTipsLoaded("CClass:SyncSamplingFormulas",{3364:"<div class=\"NDToolTip TClass LC\"><div id=\"NDPrototype3364\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">namespace</span> SyncSamplingFormulas</div><div class=\"TTSummary\">Contains formulas for determining Sync Sampling configuration</div></div>",3371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3371\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> bytesPerSecond(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">numChs,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">bytesPerSample</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the number of bytes per second</div></div>",3372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3372\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxBytesPerPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">lossless,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">highBandwidth</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the maximum number of bytes per packet</div></div>",3373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3373\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> groupSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">bytesPerSecond,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxBytesPerPacket,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">highCapacity</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the group size</div></div>",3374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3374\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> txPerGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">bytesPerSecond,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxBytesPerPacket,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the transmissions per group</div></div>",3375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3375\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> txPerSecond(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the number of transmissions per second</div></div>",3376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3376\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> slotSpacing()</div><div class=\"TTSummary\">Gets the slot spacing for the network</div></div>",3377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3377\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxTdmaAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the maximum TDMA address that is allowed</div></div>",3378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3378\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> percentBandwidth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">txPerSecond</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the percent of bandwidth for a single node</div></div>",3379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3379\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> sampleDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">numSweeps,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the sample duration for a given sample rate and number of sweeps</div></div>",3380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3380\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> bytesPerSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">bytesPerSample,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">numChs</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the total number of bytes per data sweep</div></div>",3381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3381\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> checkSamplingDelay(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">SyncSamplingMode&nbsp;</td><td></td><td class=\"PName last\">samplingMode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">nodeModel</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Whether or not the sampling delay should be checked when finding slots in the Sync Sampling network</div></div>",3382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3382\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> slotsBetweenTx(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the number of slots that need to be between each transmission</div></div>",3383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3383\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> canHaveSlot1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeModel</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the node can be assigned slot 1 in the Sync Sampling network</div></div>",3384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3384\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> totalBytesPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">bytesPerSweep,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">numSweeps</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the total number of bytes per burst</div></div>",3385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3385\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> maxDataBytesPerPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">bytesPerSweep,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">lossless</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the maximum number of bytes per packet</div></div>",3386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3386\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> totalNeededBurstTx(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">totalBytesPerBurst,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxBurstBytesPerPacket</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the total needed transmissions for bursts</div></div>",3387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3387\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">totalNeededTx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">sampleDuration,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">lossless</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the minimum amount of time allowed between bursts</div></div>",3388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3388\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan minTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DataFormat&nbsp;</td><td></td><td class=\"PName last\">dataFormat,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">numActiveChs,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> mscl::</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">sweepsPerBurst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the minimum time that can be assigned for a Burst Sync Sampling session.</div></div>",3389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3389\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> burstTxPerSecond(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">totalNeededTx,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">timeBetweenBursts,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">sampleDuration,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">lossless</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the burst transmissions per second</div></div>"});