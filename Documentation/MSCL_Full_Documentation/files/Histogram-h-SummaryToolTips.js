NDSummary.OnToolTipsLoaded("File:Histogram.h",{4353:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4353\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Bin</div></div></div><div class=\"TTSummary\">Represents a single bin within a Histogram.</div></div>",4355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4355\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Bin(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">end,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Bin object.</div></div>",4357:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4357\" class=\"NDPrototype NoParameterForm\">Value m_start</div><div class=\"TTSummary\">The start of the range of the bin.</div></div>",4358:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4358\" class=\"NDPrototype NoParameterForm\">Value m_end</div><div class=\"TTSummary\">The end of the range of the bin (non-inclusive).</div></div>",4359:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4359\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_count</div><div class=\"TTSummary\">The number of values that fall within the range of this bin.</div></div>",4361:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4361\" class=\"NDPrototype NoParameterForm\">Value start() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the start of the range of the bin.</div></div>",4362:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4362\" class=\"NDPrototype NoParameterForm\">Value end() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the end of the range of the bin (non-inclusive).</div></div>",4363:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4363\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> count() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of values that fall within the range of this bin.</div></div>",4365:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of Bin objects.</div></div>",4366:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4366\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Histogram</div></div></div><div class=\"TTSummary\">Represents a Histogram object.</div></div>",4368:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4368\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Histogram(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">binsStart,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">binsSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Histogram object with no bins.</div></div>",4370:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4370\" class=\"NDPrototype NoParameterForm\">Value m_binsStart</div><div class=\"TTSummary\">The value of the start of the first Bin in the Histogram.</div></div>",4371:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4371\" class=\"NDPrototype NoParameterForm\">Value m_binsSize</div><div class=\"TTSummary\">The size of each Bin in the Histogram.</div></div>",4372:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4372\" class=\"NDPrototype NoParameterForm\">Bins m_bins</div><div class=\"TTSummary\">The Bins that are contained within this Histogram.</div></div>",4374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4374\" class=\"NDPrototype NoParameterForm\">Value binsStart() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the value of the start of the first Bin in the Histogram.</div></div>",4375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4375\" class=\"NDPrototype NoParameterForm\">Value binsSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the size of each Bin in the Histogram.</div></div>",4376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4376\" class=\"NDPrototype NoParameterForm\">Bins bins() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Bins contained within this Histogram.</div></div>",4377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4377\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addBin(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bin&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bin</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a single Bin to the Histogram.&nbsp; The first Bin\'s start value should match the binsStart used in the constructor.&nbsp; Every Bin added should have the same size which matches the binsSize used in the constructor.</div></div>"});