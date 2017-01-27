NDSummary.OnToolTipsLoaded("File:MicroStrain/DataBuffer.h",{5237:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Used to easily read a container of bytes</div></div>",5238:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5238\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BufferWriter</div></div></div><div class=\"TTSummary\">Class used to interface with a DataBuffer and append data to it</div></div>",5240:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5240\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BufferWriter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a BufferWriter object</div></div>",5242:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5242\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* m_buffer</div><div class=\"TTSummary\">The buffer to write to, at the specific position to start writing data</div></div>",5243:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5243\" class=\"NDPrototype NoParameterForm\">std::size_t m_size</div><div class=\"TTSummary\">The size available to write</div></div>",5244:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5244\" class=\"NDPrototype NoParameterForm\">std::size_t* m_writeOffset</div><div class=\"TTSummary\">A pointer to the current position to start writing in the buffer</div></div>",5246:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5246\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* buffer()</div><div class=\"TTSummary\">Gets the buffer to write to</div></div>",5247:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5247\" class=\"NDPrototype NoParameterForm\">std::size_t size()</div><div class=\"TTSummary\">Gets the size of the buffer available to write</div></div>",5248:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5248\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> commit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesAdded</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Commits a number of bytes that were added to the buffer by moving the current offset.</div></div>",5249:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5249\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataBuffer</div></div></div><div class=\"TTSummary\">A buffer of bytes extending from the ByteStream class that is used for holding bytes read in from the connection</div></div>",5251:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5251\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">The underlying ByteStream that holds the data</div></div>",5252:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5252\" class=\"NDPrototype NoParameterForm\">std::size_t m_appendPosition</div><div class=\"TTSummary\">The current position to use when appending data to the buffer</div></div>",5253:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5253\" class=\"NDPrototype NoParameterForm\">std::size_t m_readPosition</div><div class=\"TTSummary\">The current position in the buffer for reading data</div></div>",5255:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5255\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object</div></div>",5256:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5256\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object given existing data as Bytes</div></div>",5257:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5257\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer given an existing ByteStream</div></div>",5258:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5258\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~DataBuffer()</div><div class=\"TTSummary\">Default destructor for the DataBuffer object</div></div>",5259:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5259\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> peekByte()</div><div class=\"TTSummary\">Gets the next byte from the buffer without moving the read position</div></div>",5260:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5260\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> skipBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesToSkip</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves the read pointer forward the requested number of bytes</div></div>",5261:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5261\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int8</span> read_int8()</div><div class=\"TTSummary\">Reads the next 1-byte signed integer from the buffer</div></div>",5262:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5262\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> read_uint8()</div><div class=\"TTSummary\">Reads the next 1-byte unsigned integer from the buffer</div></div>",5263:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5263\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> read_int16()</div><div class=\"TTSummary\">Reads the next 2-byte signed integer from the buffer</div></div>",5264:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5264\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> read_uint16()</div><div class=\"TTSummary\">Reads the next 2-byte unsigned integer from the buffer</div></div>",5265:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5265\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> read_uint32()</div><div class=\"TTSummary\">Reads the next 4-byte unsigned integer from the buffer</div></div>",5266:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5266\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> read_uint64()</div><div class=\"TTSummary\">Reads the next 8-byte unsigned integer from the buffer</div></div>",5267:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5267\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> read_float()</div><div class=\"TTSummary\">Reads the next 4-byte float from the buffer</div></div>",5268:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5268\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> read_double()</div><div class=\"TTSummary\">Reads the next 8-byte double from the buffer</div></div>",5269:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5269\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the buffer</div></div>",5270:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5270\" class=\"NDPrototype NoParameterForm\">std::size_t size() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of bytes in the DataBuffer</div></div>",5272:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5272\" class=\"NDPrototype NoParameterForm\">std::size_t appendPosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the append position of the buffer.</div></div>",5273:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5273\" class=\"NDPrototype NoParameterForm\">std::size_t readPosition() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the read position of the buffer.</div></div>",5274:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5274\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> moreToRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not there are more bytes to be read in the DataBuffer</div></div>",5275:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5275\" class=\"NDPrototype NoParameterForm\">std::size_t shiftExtraToStart()</div><div class=\"TTSummary\">Copies any unparsed data in the DataBuffer to the front of the buffer.&nbsp; Also resets the readPosition and moves the appendPosition to immediately after the data that was moved.</div></div>",5276:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5276\" class=\"NDPrototype NoParameterForm\">BufferWriter getBufferWriter()</div><div class=\"TTSummary\">Creates a BufferWriter object based on this DataBuffer.</div></div>",5277:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5277\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetBuffer()</div><div class=\"TTSummary\">Resets the append and read positions in the buffer back to 0.</div></div>",5278:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5278\" class=\"NDPrototype NoParameterForm\">Bytes bytesToRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a copy of the underlying bytes in this DataBuffer from the read position to the appendPosition.</div></div>",5279:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5279\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ReadBufferSavePoint</div></div></div><div class=\"TTSummary\">Acts as a save point so that bytes can be read out of a DataBuffer and the read point reverted</div></div>",5281:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5281\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ReadBufferSavePoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ReadBufferSavePoint based on the DataBuffer passed in</div></div>",5282:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5282\" class=\"NDPrototype NoParameterForm\">~ReadBufferSavePoint()</div><div class=\"TTSummary\">Destroying a ReadBufferSavePoint object, reverting any uncommited data</div></div>",5284:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5284\" class=\"NDPrototype NoParameterForm\">DataBuffer* m_data</div><div class=\"TTSummary\">The DataBuffer of data to be accessed</div></div>",5285:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5285\" class=\"NDPrototype NoParameterForm\">std::size_t m_savePosition</div><div class=\"TTSummary\">The current save position in the DataBuffer</div></div>",5287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5287\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> revert()</div><div class=\"TTSummary\">reverts the read position of the DataBuffer back to its saved position</div></div>",5288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5288\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> commit()</div><div class=\"TTSummary\">commits all the currently read data so that it will not be reverted</div></div>"});