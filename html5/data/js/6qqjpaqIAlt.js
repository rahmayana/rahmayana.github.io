﻿window.globalProvideData('slide', '{"title":"Jumlah semua kelereng yang ada pada gambar adalah…","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":960,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":24,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6qqjpaqIAlt","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6duJlvTtguU.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5Ui9dhGYhJp"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6fFAinZYifx.InvalidPromptSlide"}}]}]},"ReviewInt_6L1BhfMGSHv":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6duJlvTtguU"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5Ui9dhGYhJp.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6L1BhfMGSHv_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6L1BhfMGSHv_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6L1BhfMGSHv","typea":"var","valueb":"6Cy6ZW9297u","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Cy6ZW9297u.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6L1BhfMGSHv"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Cy6ZW9297u.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6L1BhfMGSHv"}]}]}]},"ReviewIntCorrectIncorrect_6L1BhfMGSHv":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6L1BhfMGSHv_ReviewShape"}}]},"AnsweredInt_6L1BhfMGSHv":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6L1BhfMGSHv"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6L1BhfMGSHv":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6duJlvTtguU"},"enabled":{"type":"boolean","value":false}}]},"6L1BhfMGSHv_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5Ui9dhGYhJp.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6Cy6ZW9297u.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6L1BhfMGSHv"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5Ui9dhGYhJp.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5Ui9dhGYhJp.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6L1BhfMGSHv"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6qqjpaqIAlt":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6P3H3bA1NDu"}}]},"NavigationRestrictionPreviousSlide_6qqjpaqIAlt":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6fFAinZYifx","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6fFAinZYifx","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6Cy6ZW9297u_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6Cy6ZW9297u_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6Cy6ZW9297u_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6L1BhfMGSHv"}]},{"kind":"showtimer","id":"_player.6Cy6ZW9297u_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6L1BhfMGSHv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6L1BhfMGSHv"}],"elseActions":[{"kind":"exe_actiongroup","id":"6L1BhfMGSHv_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6L1BhfMGSHv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6L1BhfMGSHv","typea":"var","valueb":"6Cy6ZW9297u","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Cy6ZW9297u"},"completed_slide_ref":{"type":"string","value":"_player.5wNI2HfDy4Y.61EE7DTjwhT"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6L1BhfMGSHv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6L1BhfMGSHv","typea":"var","valueb":"6Cy6ZW9297u","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Cy6ZW9297u"},"completed_slide_ref":{"type":"string","value":"_player.5wNI2HfDy4Y.61EE7DTjwhT"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6qqjpaqIAlt"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6qqjpaqIAlt"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":28,"id":"5rr5qzF9b5R"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":5646,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6L1BhfMGSHv_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6duJlvTtguU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Q3TtIuNqbz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bgsD5655SX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nma1NBfTq8"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5rr5qzF9b5R"}},{"kind":"media_play","objRef":{"type":"string","value":"5rr5qzF9b5R"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5rr5qzF9b5R"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry2","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":304,"yPos":374,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":163.5,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6duJlvTtguU","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":308,"height":54,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":142,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":77}}},"html5data":{"xPos":0,"yPos":0,"width":328,"height":54,"strokewidth":1}},"width":328,"height":54,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":329,"bottom":55,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":76}}},"id":"6duJlvTtguU","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry2","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Q3TtIuNqbz_493907041","id":"01","linkId":"txt__default_6Q3TtIuNqbz","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":844,"height":34,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Jumlah semua kelereng yang ada pada gambar adalah…","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.201}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":50,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":653,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":79}}}],"shapemaskId":"","xPos":152,"yPos":118,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":22,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":864,"bottom":44,"altText":"Jumlah semua kelereng yang ada pada gambar adalah…","pngfb":false,"pr":{"l":"Lib","i":78}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":44,"strokewidth":0}},"width":864,"height":44,"resume":true,"useHandCursor":true,"id":"6Q3TtIuNqbz"},{"kind":"image","btnxpos":28,"btnypos":124,"zoomiconurl":"story_content/zoomIcon.png","zoomtype":"flashwindow","zoomslide":false,"zoomdata":{"hotlinkId":"","accState":0,"imagedata":{"assetId":26,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"6lx7rW4kM4h.png","xPos":0,"yPos":0,"width":337,"height":153,"strokewidth":0,"mask":"C969X"}},"accType":"none","shapemaskId":"","xPos":296,"yPos":190,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":168,"rotateYPos":76.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"imagedata":{"assetId":25,"url":"","type":"normal","altText":"Picture13-removebg-preview.png","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"Shape5bgsD5655SX.png","xPos":0,"yPos":0,"width":337,"height":154,"strokewidth":0,"mask":"32D5X"}},"width":336,"height":153,"resume":true,"useHandCursor":true,"id":"5bgsD5655SX"},{"kind":"image","btnxpos":28,"btnypos":36,"zoomiconurl":"","zoomtype":"none","zoomslide":false,"accType":"none","shapemaskId":"","xPos":48,"yPos":38,"tabIndex":0,"tabEnabled":true,"xOffset":-9,"yOffset":-5,"rotateXPos":32,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"imagedata":{"assetId":27,"url":"","type":"normal","altText":"home-icon.png","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"Shape6nma1NBfTq8.png","xPos":-9,"yPos":-5,"width":74,"height":74,"strokewidth":0,"mask":"19CO2X43O6X42OBX2COAX4OFX29OAX4O12X27O23X25O26X23O27X22O29X20O2AX1FO2CX1DO2EX1BO2FX1AO31X18O32X16O35X12O38X10O3BXDO3EXAO40X9O41X7O43X6O43X5O45X4O45X5O43X6O43X6O43X6O42X8O41X9O3EXCO39X12O0X0O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X14O35X13O36X11O38X10O3CXDO3CXDO3CXDO3CXDO3EXBO3FXBO3EXBO3DXDO37X15O2FX184O"}},"width":64,"height":64,"resume":true,"useHandCursor":true,"id":"6nma1NBfTq8","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.633re52Vnjw.6UvBGgHCjFA"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6L1BhfMGSHv_CorrectReview","id":"01","linkId":"6L1BhfMGSHv_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":522,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":73}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6L1BhfMGSHv_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6L1BhfMGSHv_IncorrectReview","id":"01","linkId":"6L1BhfMGSHv_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":531,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":75}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":74}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6L1BhfMGSHv_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6L1BhfMGSHv_ReviewShape","id":"01","linkId":"txt_6L1BhfMGSHv_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":436,"bottom":497,"pngfb":false,"pr":{"l":"Lib","i":81}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":244.5,"rotateYPos":212,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":940,"bottom":556,"altText":"","pngfb":false,"pr":{"l":"Lib","i":80}},"html5data":{"xPos":1,"yPos":1,"width":938,"height":554,"strokewidth":1}},"width":489,"height":424,"resume":false,"useHandCursor":true,"id":"6L1BhfMGSHv_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');