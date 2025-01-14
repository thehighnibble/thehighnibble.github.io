(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{223:function(e,t,s){e.exports=s.p+"assets/img/UHC_RC2014.107b5d99.jpg"},224:function(e,t,s){e.exports=s.p+"assets/img/UHC_RC2014_example.e8b0475b.jpg"},225:function(e,t,s){e.exports=s.p+"assets/img/UHC_SA.5246eee7.jpg"},226:function(e,t,s){e.exports=s.p+"assets/img/UHC_SA_example.326dc67a.jpg"},227:function(e,t,s){e.exports=s.p+"assets/img/keyboard_device_status.bd790f9a.jpg"},228:function(e,t,s){e.exports=s.p+"assets/img/UHC_firmware_upgrade.99f92466.jpg"},229:function(e,t,s){e.exports=s.p+"assets/img/UHC_firmware_fail.bb1e2403.jpg"},230:function(e,t,s){e.exports=s.p+"assets/img/UHC_firmware_success.4c60a5d8.jpg"},277:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"usb-host-controller-uhc-firmware-update-guide-draft"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usb-host-controller-uhc-firmware-update-guide-draft"}},[this._v("#")]),this._v(" USB Host Controller (UHC) Firmware Update Guide (Draft)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[this._v("#")]),this._v(" Background")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-procedure-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-procedure-overview"}},[this._v("#")]),this._v(" Update Procedure Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Press "),t("code",[this._v("9")]),this._v(" on the keyboard to show the keyboard device status")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Press "),t("code",[this._v("U")]),this._v(" (uppercase 'U') to start the update process")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("If you have PS/2 keyboard connector you can still view the keyboard device status on the SET-UP D screen but pressing 'U' will do nothing.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("While it is safe to perform the UHC firmware upgrade repeatedly, the CH559T microcontroller can only be re-flashed a limited number of times (appoximately 100) before it will fail to re-flash again and may not operate correctly after this time.")]),this._v(" "),t("p",[this._v("It is recommended to only update the UHC firmware when required, as indicated in the release notes for a VT132 firmware update.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-procedure-step-by-step-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-procedure-step-by-step-guide"}},[this._v("#")]),this._v(" Update Procedure Step-by-Step guide")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"update-the-vt132-to-the-latest-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-the-vt132-to-the-latest-release"}},[this._v("#")]),this._v(" Update the VT132 to the latest release")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"navigate-to-the-set-up-d-screen-of-the-vt132"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigate-to-the-set-up-d-screen-of-the-vt132"}},[this._v("#")]),this._v(" Navigate to the SET-UP D screen of the VT132")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Press the "),t("code",[this._v("SETUP")]),this._v(" key ie. "),t("code",[this._v("<Alt><SysReq>")]),this._v(" or "),t("code",[this._v("<Alt><PrintScreen>")]),this._v(" to enter the VT132 SET-UP screens")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"show-the-keyboard-device-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-the-keyboard-device-status"}},[this._v("#")]),this._v(" Show the keyboard device status")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Press "),t("code",[this._v("9")]),this._v(" on the keyboard to show the keyboard device status")]),this._v(" "),t("li",[this._v("Details of the current UHC firmware version and any attached keyboard will be shown like in this example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(227),alt:"Keyboard device status"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"start-the-uhc-firmware-update-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-the-uhc-firmware-update-process"}},[this._v("#")]),this._v(" Start the UHC firmware update process")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Press "),t("code",[this._v("U")]),this._v(" (uppercase 'U') on the keyboard to start the UHC firmware update process")]),this._v(" "),t("li",[this._v("Details of the first UHC firmware update screen are shown here:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(228),alt:"UHC firmware upgrade"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("As the first two (2) lines of text on this screen suggest, you can abort the update process by pressing "),t("code",[this._v("reset")]),this._v(" during the first 5 seconds.")]),this._v(" "),t("p",[this._v("This is only the first point where you can abort the process, there are 2 other opportunities later in the process.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"proceeding-with-the-update-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proceeding-with-the-update-process"}},[this._v("#")]),this._v(" Proceeding with the update process")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("As the text on the "),s("strong",[e._v("UHC firmware upgrade")]),e._v(" screen indicates, you must power-cycle the VT132 to proceed with the update process.")]),e._v(" "),s("li",[e._v("In addition you must jumper/short two (2) pads on the back of the VT132 to force the UHC to restart in "),s("strong",[e._v("programming mode")])]),e._v(" "),s("li",[e._v("Diagrams showing the pads to short for both the "),s("strong",[e._v("VT132 for RC2014")]),e._v(" and the "),s("strong",[e._v("VT132 Stand Alone")]),e._v(" editions are given here:\n"),s("ul",[s("li",[e._v("In the first image the pads are circled in "),s("em",[e._v("GREEN")]),e._v(".")]),e._v(" "),s("li",[e._v("In the second image you can see how I normally do this with a pair of tweezers.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"vt132-designed-for-rc2104-edition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vt132-designed-for-rc2104-edition"}},[this._v("#")]),this._v(" VT132 Designed for RC2104 edition")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"vt132-stand-alone-edition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vt132-stand-alone-edition"}},[this._v("#")]),this._v(" VT132 Stand Alone edition")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"finishing-the-update-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finishing-the-update-process"}},[this._v("#")]),this._v(" Finishing the update process")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"failure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#failure"}},[this._v("#")]),this._v(" Failure")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("If you have "),s("strong",[e._v("not")]),e._v(" successfully forced the UHC to restart in "),s("strong",[e._v("programming mode")]),e._v(", you will see the following screen after the restart:")]),e._v(" "),s("li",[e._v("This will also happen if you only "),s("strong",[e._v("reset")]),e._v(" the VT132 and have not performed a full power cycle")]),e._v(" "),s("li",[e._v("If you see this screen, simply reset the VT132 and start the procedure again")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(229),alt:"UHC firmware upgrade failure"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"success"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#success"}},[this._v("#")]),this._v(" Success")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("If you have successfully forced the UHC to restart in "),s("strong",[e._v("programming mode")]),e._v(", you will see the following screen after the restart:")]),e._v(" "),s("li",[e._v("The UHC firmware update will now complete")]),e._v(" "),s("li",[e._v("When you see the "),s("em",[e._v("GREEN")]),e._v(" text "),s("code",[e._v("UHC upgrade complete.")]),e._v(" the process is finsihed")]),e._v(" "),s("li",[e._v("You must again perform a full power cycle to correctly restart the UHC following the firmware upgrade")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(230),alt:"UHC firmware upgrade success"}})])}],i=s(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("The VT132 USB-HID keyboard adapter, the small, red, PCB supplied when you order the USB-HID keyboard option, uses a CH559T microcontroller as a USB Host Controller (UHC).")]),e._v(" "),r("p",[e._v("The UHC runs its own firmware that translates between USB-HID protocols and a high-speed serial protocol for the ESP32 to work with a USB keyboard.")]),e._v(" "),r("p",[e._v("From time-to-time, firmware updates may be released to improve performance, fix bugs or extend the functionality of the UHC.")]),e._v(" "),r("p",[e._v("These firmware updates will be embedded in a release of the VT132 firmware and initiated from within the VT132 Setup screens.")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("The procedure for updating the UHC firmware is:")]),e._v(" "),r("ol",[r("li",[e._v("Update the VT132 to the latest release, following the "),r("router-link",{attrs:{to:"./../ota/"}},[e._v("OTA Firmware Update Guide")])],1),e._v(" "),r("li",[e._v("Navigate to the "),r("router-link",{attrs:{to:"./../vt100/operator/setup-d/"}},[e._v("SET-UP D")]),e._v(" screen of the VT132")],1),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("li",[e._v("Follow the on-screen prompts for restarting the VT132 to proceed with the update process")])]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("This is documented in the "),r("router-link",{attrs:{to:"./../ota/"}},[e._v("OTA Firmware Update Guide")])],1),e._v(" "),e._m(9),e._v(" "),r("ul",[e._m(10),e._v(" "),r("li",[e._v("Press "),r("code",[e._v("5")]),e._v(" three (3) times to navigate to the "),r("router-link",{attrs:{to:"./../vt100/operator/setup-d/"}},[e._v("SET-UP D")]),e._v(" screen")],1)]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),r("br"),e._v(" "),r("img",{attrs:{src:s(223),width:"360",alt:"VT132 RC2014 pads"}}),e._v(" "),r("img",{attrs:{src:s(224),width:"360",alt:"VT132 RC2014 example"}}),e._v(" "),e._m(21),e._v(" "),r("br"),e._v(" "),r("img",{attrs:{src:s(225),width:"360",alt:"VT132 SA pads"}}),e._v(" "),r("img",{attrs:{src:s(226),width:"360",alt:"VT132 SA example"}}),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28)])}),r,!1,null,null,null);t.default=a.exports}}]);