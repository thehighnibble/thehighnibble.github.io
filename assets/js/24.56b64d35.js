(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{222:function(e,t,o){e.exports=o.p+"assets/img/Modem_OTA_Status.e11f0da8.jpg"},276:function(e,t,o){"use strict";o.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"over-the-air-ota-firmware-update-guide-draft"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#over-the-air-ota-firmware-update-guide-draft"}},[this._v("#")]),this._v(" Over-the-Air (OTA) Firmware Update Guide (Draft)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The OTA Update feature of the VT132 enables you to update the firmware of your VT132 to the latest release "),t("strong",[this._v("without")]),this._v(" having to connect your VT132 to a PC via the FTDI connector or install any utilities on your PC to flash new firmware to the ESP32 module.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("From the modem prompt/command line you can type "),t("code",[this._v("AT$")]),this._v(" for help to be reminded of the OTA 'AT' commands.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can connect to the modem from your system using a terminal program such as "),t("strong",[this._v("KERMIT")]),this._v(" or "),t("strong",[this._v("QTERM")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-to-latest-version-from-github-repository-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-to-latest-version-from-github-repository-recommended"}},[this._v("#")]),this._v(" Update to latest version from GitHub repository (recommended)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The current firmware on GitHub is tagged as the "),t("em",[this._v("latest")]),this._v(" release, so simply use the OTA update feature as follows:")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",[e._v("AT+W+")]),e._v(" or "),o("code",[e._v("AT+W=ssid,pwd")]),e._v(" to join your Wi-Fi network")]),e._v(" "),o("li",[o("code",[e._v("AT+U$")]),e._v(" to see what firmware version you are currently running [optional]")]),e._v(" "),o("li",[o("code",[e._v("AT+U?")]),e._v(" to query GitHub for the latest firmware image")]),e._v(" "),o("li",[e._v("should report "),o("code",[e._v("V1.2.0")]),e._v(" (or similar)\n"),o("ul",[o("li",[e._v("following the version number, a self explanatory indicator of "),o("code",[e._v("[OLDER]")]),e._v(", "),o("code",[e._v("[SAME]")]),e._v(" or "),o("code",[e._v("[NEWER]")]),e._v(" will be shown")])])]),e._v(" "),o("li",[o("code",[e._v("AT+U^")]),e._v(" or "),o("code",[e._v("AT+U!")]),e._v(" to upgrade or "),o("em",[e._v("force")]),e._v(" the upgrade, depending on your current version\n"),o("ul",[o("li",[o("code",[e._v("AT+U^")]),e._v(" will only work if the queried firmware image is "),o("code",[e._v("[NEWER]")])]),e._v(" "),o("li",[e._v("during the upgrade process a series of full-stops "),o("code",[e._v("...")]),e._v(" will be output to indicate progress with the upgrade")]),e._v(" "),o("li",[e._v("when the upgrade completes downloading the new firmware image into flash memory the modem will respond with an "),o("code",[e._v("OK")])])])]),e._v(" "),o("li",[o("code",[e._v("AT+U$")]),e._v(" to see what firmware version you will boot next [optional]")]),e._v(" "),o("li",[e._v("H/W reset after success with the download & flash\n"),o("ul",[o("li",[e._v("the new firmware image will only be run following a H/W reset or reboot")])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Once you have entered the "),o("strong",[e._v("Query OTA Update")]),e._v(" command "),o("code",[e._v("AT+U?")]),e._v(" the VT132 should not be expected to operate "),o("em",[e._v('"normally"')]),e._v(" until you perform a H/W reset or reboot of the VT132.")]),e._v(" "),o("p",[e._v("This is because the "),o("strong",[e._v("Query OTA Update")]),e._v(" command opens and creates a number of files and large data structures in memory that may conflict with normal operation and these can only be closed and released by a H/W reset or reboot.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("You can safely "),t("em",[this._v("force")]),this._v(" upgrade "),t("code",[this._v("AT+U!")]),this._v(' the firmware to the same version you are currently running if you simply want to "practice" the upgrade process.')])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Example output from the "),o("strong",[e._v("Show OTA Partition Status")]),e._v(" "),o("code",[e._v("AT+U$")]),e._v(" and "),o("strong",[e._v("Query OTA Update")]),e._v(" "),o("code",[e._v("AT+U?")]),e._v(" commands is show here:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:o(222),alt:"OTA AT Commands"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-to-a-version-from-a-local-web-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-to-a-version-from-a-local-web-server"}},[this._v("#")]),this._v(" Update to a version from a local web server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("The standard firmware image file is named "),t("code",[this._v("VT132.bin")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Eg. With the firmware image file "),o("code",[e._v("VT132.bin")]),e._v(' staged on the root of the "local" web server running on '),o("strong",[e._v("port")]),e._v(" "),o("code",[e._v("5500")]),e._v(" with "),o("strong",[e._v("DNS name")]),e._v(" "),o("code",[e._v("mylocalserver")]),e._v(" and "),o("strong",[e._v("IPv4 address")]),e._v(" of "),o("code",[e._v("192.168.1.20")]),e._v(" proceed as follows:")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",[e._v("AT+W+")]),e._v(" or "),o("code",[e._v("AT+W=ssid,pwd")]),e._v(" to join your Wi-Fi network")]),e._v(" "),o("li",[o("code",[e._v("AT+U$")]),e._v(" to see what firmware version you are currently running [optional]")]),e._v(" "),o("li",[o("code",[e._v("AT+U=url_for_local_file")]),e._v(" to set the URL to the file on the local web server, eg.:\n"),o("ul",[o("li",[o("code",[e._v("AT+U=http://mylocalserver:5500/VT132.bin")]),e._v(" if using the DNS name, or")]),e._v(" "),o("li",[o("code",[e._v("AT+U=http://192.168.1.20:5500/VT132.bin")]),e._v(" if using the IPV4 address")])])]),e._v(" "),o("li",[o("code",[e._v("AT+U?")]),e._v(" to query the local web server for the firmware image specified")]),e._v(" "),o("li",[e._v("should report "),o("code",[e._v("V1.2.0")]),e._v(" (or similar)\n"),o("ul",[o("li",[e._v("following the version number, a self explanatory indicator of "),o("code",[e._v("[OLDER]")]),e._v(", "),o("code",[e._v("[SAME]")]),e._v(" or "),o("code",[e._v("[NEWER]")]),e._v(" will be shown")])])]),e._v(" "),o("li",[o("code",[e._v("AT+U^")]),e._v(" or "),o("code",[e._v("AT+U!")]),e._v(" to upgrade or "),o("em",[e._v("force")]),e._v(" the upgrade, depending on your current version\n"),o("ul",[o("li",[o("code",[e._v("AT+U^")]),e._v(" will only work if the queried firmware image is "),o("code",[e._v("[NEWER]")])]),e._v(" "),o("li",[e._v("during the upgrade process a series of full-stops "),o("code",[e._v("...")]),e._v(" will be output to indicate progress with the upgrade")]),e._v(" "),o("li",[e._v("when the upgrade completes downloading the new firmware image into flash memory the modem will respond with an "),o("code",[e._v("OK")])])])]),e._v(" "),o("li",[o("code",[e._v("AT+U$")]),e._v(" to see what firmware version you will boot next [optional]")]),e._v(" "),o("li",[e._v("H/W reset after success with the download & flash\n"),o("ul",[o("li",[e._v("the new firmware image will only be run following a H/W reset or reboot")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"update-to-a-version-using-the-esp-idf-epstool-py-utility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-to-a-version-using-the-esp-idf-epstool-py-utility"}},[this._v("#")]),this._v(" Update to a version using the ESP-IDF "),t("code",[this._v("epstool.py")]),this._v(" utility")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("download the "),o("code",[e._v("FIRMWARE.zip")]),e._v(" file")]),e._v(" "),o("li",[e._v("unzip the file")]),e._v(" "),o("li",[e._v("read the "),o("code",[e._v("FLASHING.md")]),e._v(" file for instructions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"for-the-security-conscious"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-the-security-conscious"}},[this._v("#")]),this._v(" For the security conscious")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"danger custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("For the security conscious")]),e._v(" "),o("p",[e._v("OTA Updates from GitHub are performed using the "),o("strong",[e._v("https")]),e._v(" protocol.")]),e._v(" "),o("p",[e._v("Security certificates (Root CA) for "),o("strong",[e._v("GitHub")]),e._v(" and "),o("strong",[e._v("Amazon S3")]),e._v(" (where GitHub stores release binary files) are embedded in the firmware.")]),e._v(" "),o("p",[o("strong",[e._v("https")]),e._v(" requests to servers that use any other "),o("em",[e._v("Root CA")]),e._v(" certificate will fail to authenticate.")]),e._v(" "),o("p",[e._v("Also, the VT132 makes this request as an "),o("strong",[e._v("https client")]),e._v(" and "),o("strong",[e._v("does not")]),e._v(" implement an http or https server.")]),e._v(" "),o("p",[e._v("Note also:")]),e._v(" "),o("ul",[o("li",[e._v("A Wi-Fi connection to an Access Point is never established by default, but must be explicitly (re)connected using the "),o("code",[e._v("AT+W=")]),e._v(" or "),o("code",[e._v("AT+W+")]),e._v(" commands")]),e._v(" "),o("li",[e._v("The only time the VT132 makes outgoing IP socket requests is when:\n"),o("ul",[o("li",[e._v("you dial a host with the "),o("code",[e._v("ATD")]),e._v(" dial command")]),e._v(" "),o("li",[e._v("you initiate an OTA update transaction with the "),o("code",[e._v("AT+U?")]),e._v(" Query OTA Update command and the subsequent "),o("code",[e._v("AT+U^")]),e._v(" or "),o("code",[e._v("AT+U!")]),e._v(" upgrade or "),o("em",[e._v("force")]),e._v(" upgrade commands")])])]),e._v(" "),o("li",[e._v('The only time the VT132 accepts incoming IP socket requests is when the modem is enabled for "Answer" mode with '),o("code",[e._v("AT&A")]),e._v(" (not be default).")])])])}],i=o(0),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),o("p",[e._v("OTA updates are performed via the 'AT' (Hayes) Modem interface using a series of 'AT' command extensions.")]),e._v(" "),e._m(2),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),e._m(3),e._v(" "),o("p",[e._v("OR")]),e._v(" "),o("p",[e._v("You can enable the modem locally and connect directly from the VT100 to the modem in "),o("strong",[e._v("LOCAL")]),e._v(" mode. See the "),o("router-link",{attrs:{to:"./../vt100/operator/quick-menu/"}},[e._v("Quick Menu Guide")]),e._v(" for details.")],1)]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),o("p",[e._v("From the modem prompt/command line:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),o("p",[e._v("A full description of the OTA Update commands and their output will be added here later: TBA.")]),e._v(" "),e._m(11),e._v(" "),o("p",[e._v("If you have a firmware image file or if you wish to install a firmware image "),o("strong",[e._v("other")]),e._v(" than the one tagged "),o("em",[e._v("latest")]),e._v(" on the "),o("a",{attrs:{href:"https://github.com/thehighnibble/vt132/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub firmware repository"),o("OutboundLink")],1),e._v(" you can stage that file on a local web server (ie. on the same network as the VT132 connects over Wi-Fi) and use a process similar to the one above, but with one extra command to provide the local address of the firmware image.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),o("p",[e._v("From the modem prompt/command line:")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),o("p",[e._v("Instructions for flashing the firmware using the "),o("strong",[e._v("ESP-IDF")]),e._v(" "),o("code",[e._v("esptool.py")]),e._v(" utility are included with the firmware downloadable from the "),o("a",{attrs:{href:"https://github.com/thehighnibble/vt132/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub firmware repository"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("If using this process to upgrade:")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18)])}),r,!1,null,null,null);t.default=s.exports}}]);