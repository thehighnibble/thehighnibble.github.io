(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{267:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The S-132 requires only minimal configuration to get working.")]),t._v(" "),s("p",[t._v("The majority of features require no configuration to make work. However, the "),s("code",[t._v("boot.conf")]),t._v(" file on the IMSAI8080 or Cromemco Z-1 replica must be edited to enable the TTY: (TTY2: & TTY3: - "),s("em",[t._v("Cromemco Z-1 only")]),t._v(") and VIO: keyboard ("),s("em",[t._v("IMSAI8080 only")]),t._v(") to be recognized as input/output devices by the "),s("router-link",{attrs:{to:"/imsai8080/configure/#sio-2-port-mappings"}},[t._v("HAL in the IMSAI8080")]),t._v(" or the "),s("router-link",{attrs:{to:"/cromemcoZ1/configure/#tu-art-device-mappings"}},[t._v("HAL in the Cromemco Z-1")]),t._v(" respectively.")],1),t._v(" "),s("p",[t._v("The VT100 terminal emulation (VT132), on the other hand, has extensive configuration options. See the "),s("router-link",{attrs:{to:"/vt132/operation/"}},[t._v("VT132 Operation Manual")]),t._v(" for details.")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The S-132 will perform a hand-shake with the ESP32-PICO-KIT on the replica and you will (may) briefly see the message")]),t._v(" "),t._m(3),s("p",[t._v("displayed in the upper left-hand corner of your VGA monitor. This will rapidly be replaced with the message")]),t._v(" "),t._m(4),s("p",[t._v("and a brief bell tone from the buzzer while the VT100 terminal initializes and retrieves its setting from the NVRAM.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("The S-132 can be powered from the connected IMSAI8080 or Cromemco Z-1 replica. Additional power is not required.")]),t._v(" "),s("p",[t._v("Alteratively, the S-132 can provide power to the connected IMSAI8080 or Cromemco Z-1 replica if you connect a DC power supply via the DC barrel jack on the S-132. In which case you should remove any USB cable providing power to the connected IMSAI8080 or Cromemco Z-1 replica.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Enable and initialize the S-132")]),t._v(" "),t._m(9),s("p",[t._v("To make the S-132 the first (and only) preference for the TTY: and VIO: devices, use:")]),t._v(" "),t._m(10),s("p",[t._v("To make the S-132 the first preference for the TTY: & VIO: devices and also simultaneously use the Web Desktop devices if connected, use:")]),t._v(" "),t._m(11),s("p",[t._v("To allow the Web Desktop to capture the TTY: and VIO: devices with priority ove the S-132, use:")]),t._v(" "),t._m(12),s("p",[t._v("For more information on the "),s("code",[t._v("boot.conf")]),t._v(" see "),s("router-link",{attrs:{to:"/imsai8080/configure/#sio-2-port-mappings"}},[t._v("HAL configuration for the IMSAI8080")])],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("Enable and initialize the S-132")]),t._v(" "),t._m(15),s("p",[t._v("To make the S-132 the first (and only) preference for the TTY: devices, use:")]),t._v(" "),t._m(16),s("p",[t._v("To make the S-132 the first preference for the TTY: devices and also simultaneously use the Web Desktop devices if connected, use:")]),t._v(" "),t._m(17),s("p",[t._v("To allow the Web Desktop to capture the TTY: devices with priority ove the S-132, use:")]),t._v(" "),t._m(18),s("p",[t._v("For more information on the "),s("code",[t._v("boot.conf")]),t._v(" see "),s("router-link",{attrs:{to:"/cromemcoZ1/configure/#tu-art-device-mappings"}},[t._v("HAL configuration for the Cromemco Z-1")])],1),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("T.B.A.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration-draft"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-draft"}},[this._v("#")]),this._v(" Configuration (Draft)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"start-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-up"}},[this._v("#")]),this._v(" Start-up")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("With the S-132 connected to the IMSAI8080 or Cromemco Z-1 replica along with a VGA monitor and suitable keyboard, "),e("a",{attrs:{href:"#power-options"}},[this._v("apply power")]),this._v(" and press the hardware reset on the IMSAI8080 or Cromemco Z-1 replica. As the replica boots it will force the S-132 to reboot.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Host found\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Wait\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When you first start the S-132, or after a full firmware re-flash (not an upgrade) "),s("strong",[t._v("it is completely normal")]),t._v(" to see the massage")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Error\n")])])]),s("p",[t._v("and a long bell tone from the buzzer.")]),t._v(" "),s("p",[t._v("This is the original behavior of the VT100 terminal and indicates that no settings were saved in NVRAM.")]),t._v(" "),s("p",[t._v("To avoid this message and warning tone in future simply go to one of the VT100 menus and save settings to NVRAM.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"power-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#power-options"}},[this._v("#")]),this._v(" Power Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configure-the-imsai8080"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-imsai8080"}},[this._v("#")]),this._v(" Configure the IMSAI8080")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You must edit the "),e("strong",[this._v("HAL")]),this._v(" settings in the "),e("code",[this._v("boot.conf")]),this._v(" file.\nYou can use the Web Desktop, or mount the µSD card in a PC and edit the "),e("code",[this._v("/imsai/conf/boot.conf")]),this._v(" file directly.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-editorconfig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("### Enable S-132")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[this._v("S132.init")]),e("span",{pre:!0,attrs:{class:"token value string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),this._v("1")]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### SIO-2 default port mappings (HAL)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("SIO1.portA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY,WEBTTY,UART0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("SIO1.portB.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132VIO,VIOKBD")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### SIO-2 default port mappings (HAL)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("SIO1.portA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY+,WEBTTY,UART0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("SIO1.portB.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132VIO+,VIOKBD")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### SIO-2 default port mappings (HAL)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("SIO1.portA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("WEBTTY,S132TTY,UART0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("SIO1.portB.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("VIOKBD,S132VIO")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configure-the-cromemco-z-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-cromemco-z-1"}},[this._v("#")]),this._v(" Configure the Cromemco Z-1")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You must edit the "),e("strong",[this._v("HAL")]),this._v(" settings in the "),e("code",[this._v("boot.conf")]),this._v(" file.\nYou can use the Web Desktop, or mount the µSD card in a PC and edit the "),e("code",[this._v("/cromemco/conf/boot.conf")]),this._v(" file directly.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-editorconfig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("### Enable S-132")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[this._v("S132.init")]),e("span",{pre:!0,attrs:{class:"token value string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),this._v("1")]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### TU-ART default device mappings (HAL)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART0.deviceA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY,WEBTTY,MODEM,UART0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART1.deviceA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY2,WEBTTY2,SCKTSRV1,UART1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART1.deviceB.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY3,WEBTTY3,SCKTSRV2,UART2")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### TU-ART default device mappings (HAL)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART0.deviceA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY+,WEBTTY,MODEM,UART0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART1.deviceA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY2+,WEBTTY2,SCKTSRV1,UART1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART1.deviceB.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("S132TTY3+,WEBTTY3,SCKTSRV2,UART2")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### TU-ART default device mappings (HAL)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART0.deviceA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("WEBTTY,S132TTY,MODEM,UART0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART1.deviceA.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("WEBTTY2,S132TTY2,SCKTSRV1,UART1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("TUART1.deviceB.device")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("WEBTTY3,S132TTY3,SCKTSRV2,UART2")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"d-7aio-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#d-7aio-settings"}},[this._v("#")]),this._v(" D+7AIO Settings")])}],!1,null,null,null);e.default=r.exports}}]);