const icons = {};
icons.beans_small = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		x="0"
		y="0"
		version="1.1"
		viewBox="0 0 70 70"
		xmlSpace="preserve"
	>
		<image
			width="70"
			height="70"
			x="0"
			y="0"
			href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACVVBMVEUAAAAAAAAdkV0gkWEg kV8gkmAgkmEgkWAgkmAhkWARiFUfkmAgkmAhkmAfj14gkWEgkmAAgAAgkWAhkmAgkGEgkWEbklsh kWEfkF8hkmEAkkkhkWAgj2AhkmAfj1wgkmAhkWAhkmEkk2NXrIiTybKs1sTB4NPW6uHi8OrT6eDC 4dSq1cJ3vJ5BoXdesIyy2cjx+PX///9zupsmlGRSqoTI5Nfe7+hQqYIplmev2Mb7/fx6vqA7nnPU 6uD+/v5xuZpMp3/r9fGFw6hConhotZP3+/k7n3Q3nXHo8+5ZrYlVq4bm8+212sonlWXP5901nG/6 /PsumGqm07/2+vhrtpZIpXz9/v283s/O59y/39Eymm3y+fZGpHuQyLBYrYhbroqJxatJpX1Jpn5w uJluuJhConlqtZVWrIfK5dliso/j8esikmJkspBptZSn08Cg0Lwrl2ju9vOUyrPN5ttntJPc7ea7 3s/s9vEwmWxmtJKbzriHxKpls5G228sllGQtl2ljspD0+feIxKpLpn+CwaY5nXJUq4X8/f1Np4Cp 1cK73c6AwaWKxavq9fD5/PuNx65Do3lHpHxfsI2g0Lsjk2IvmWvV6uGZzLaOx6+Mxq1Eo3qRybBF o3vJ5Nldr4uLxqydz7mczrhrtpWMx60nlGXv9/P4+/qPyK9AoXd2u52i0b2TyrLP59y53M11u51T qoSz2clQqYOYzLU2nHCr1cPg8Onw9/R/wKPt9vKVy7TQ6N44nXG328zR6N7p9O80m26GxKnq9PCu 18W+39Fst5aXzLUzmm5wDMNKAAAAIXRSTlMAASxfhq3Q3+z5D2Ko6Ump9wJY0kfYHKtT8AeUEMIZ 3qxK5folAAAAAWJLR0Qx2dsdcgAAAAd0SU1FB+MLBgQmOgxkXwsAAAQNSURBVFjDrZj3WxMxGMev kw5ooRWQIRIQUQGhFrVVhkq1bnFQBUVExQHurSiCiigOxD1Qce+9FcX9d3lNcte7JKU9n3t/aHPv fd/Pk+TyZnFcWNNodXqDMcZkNptijAa9TqvhFJvFGhsHCIuLtVqUMDQ2ezxgWrzdFm2dEhxOMIA5 HQnRUAYlggiWOCgiJCk5EiRoyUkDUwanREMBIGXwAJDUtOggQUtLDUdJHxI9BYAh6WxKhlMJhf9k GUzKUGUUAIYyOOkK6wLrQ7UrVVG/iP1D9rOCbyS1NGK8/B8FANn4SQo36rKyh+UMzx0xclRefgFT kCIdz5lsyOjCIlfIcse4GZpMSTYyIcVjXYSNG8+QiXmawMppj9dF24SJtDBRmDccDEpJqYtlZeW0 1IEoGsbAmzQ5FDrFU+HLKcMPU6dRWieaD200xT9dUoMZQc/MWfhpNq22QYyd8s+ZK23IPOjLxvWp nE/J7UGKhZ69F6CIhfC3CDvzMHURJY8PrhdWyl0VgPrFqE5LsLdc6Cq6VVZmm6qhfFbNUvifh73L MKaWxvCt0lCr2nIkr/Oj/xXYXY8x+TQmTsNpKacXt2UlCluF3asxpoHGAC2nI11u1JY1YK3ke4tN da1jUICO05Ou9VDd2AQ2oLgK5N6I02ElC6PnDKRrE5RvBsCHArdAr38retrGogADZyRd26HcB8AO WFgKnSU7EWWXm4kxcjGkazdMwT0A7EVJ5N3X7NuPk+NAC5MCYjgT4TmIuoYvtZLp3XaoiU0BJs5M eA7DiLl8qY7EFFUfaWdjzBQmGyUCXzoKS7tlpI4DDWwM2SgU7OVLx2DpeCf/U3ri5CkMOt3FbBTZ xWegeDhf6kZfvqX4bHBR8JwTapR3ntHF5Ae/AKUX+VIBLF0S31wWOFcYH5wafm2wN7MAuApjroXe LBHa1UPGGOhkuA6lN/j5GBYkXXFTqE4vGaOnU/OWMOXeJlswRcA0kjE6eqLAqXQETxh3Qm+qxe/u J2K09LR19x6S3kd/D4D7IXrxKDR8lslD+GmLiyWr81g24J54ngaePX9Rv+OlxPlKHhHLmtK7A1LM 61oXbW/kEVbmAvNWGtH1jqa8l+vhAkMvDe1TJSEfPtKYTXK9Pczi+0kS0tpJUcqq5HJbmK2A+7MY cnrLzACJ+SRX460AY2PyReyQPgDIPu7Mkosd4bdJ7V9RyLd+/uF7pQQS6CUSXNwmsTZtLc0/+NXk J1pdevoEUMevw6RScrhibSGbGl71iw81v7d5Cwv/lP+lZMnRbGgjmmxDq9L2Wq3NvlpHD5UOQmod y9Q6JKp1ZFXrAM2pdJwPjufMaCiZES4XOJWuOji1Ll44la6BoFmsdvpSyq7sUgrXScEV2T8Temup vpUadgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0wNlQxMTozODo1OC0wNzowMM8rSlQAAAAl dEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMDZUMTE6Mzg6NTgtMDc6MDC+dvLoAAAAAElFTkSuQmCC"
		></image>
	</svg>
);

const C_GIcon = () => (
	<g fillRule="evenodd" stroke="none">
		<path
			fill="#fcfcfc"
			d="M0 65v4.2h400v-8.4H0V65m0 270v4.2h400v-8.4H0v4.2"
		></path>
		<path
			fill="#d4d4d4"
			d="M0 29.2v29.2h400V0H0v29.2M0 200v128.4h400V71.6H0V200m0 170.8V400h400v-58.4H0v29.2"
		></path>
		<path
			fill="#dcece8"
			d="M0 59.4v1h400v-2H0v1m0 11.2v1h400v-2H0v1m0 258.8v1h400v-2H0v1m0 11.2v1h400v-2H0v1"
		></path>
	</g>
);



icons.c = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40px"
		height="40px"
		version="1.1"
		viewBox="0 0 400 400"
	>
	<C_GIcon/>
	</svg>
);

icons.c_small = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<C_GIcon/>
	</svg>
);

const CS_GIcon = () => (
	<g fillRule="evenodd" stroke="none">
		<path
			fill="#fcfcfc"
			d="M0 65v4.2h151.511c136.648 0 151.598.061 152.402.624C306.154 71.394 306 61.784 306 200c0 138.216.154 128.606-2.087 130.176-.804.563-15.754.624-152.402.624H0v8.4h400v-8.4h-41.511c-45.641 0-42.561.169-43.891-2.404-.908-1.757-.908-255.035 0-256.792 1.33-2.573-1.75-2.404 43.891-2.404H400v-8.4H0V65"
		></path>
		<path
			fill="#d4d4d4"
			d="M0 29.2v29.2h400V0H0v29.2M0 200v128.4h151.32c117.16 0 151.428-.108 151.8-.48.699-.699.699-255.141 0-255.84-.372-.372-34.64-.48-151.8-.48H0V200M316.88 72.08c-.699.699-.699 255.141 0 255.84.367.367 10.196.48 41.8.48H400V71.6h-41.32c-31.604 0-41.433.113-41.8.48M0 370.8V400h400v-58.4H0v29.2"
		></path>
		<path
			fill="#dcece8"
			d="M0 59.4v1h400v-2H0v1m0 11.2v1h151.32c117.16 0 151.428.108 151.8.48.699.699.699 255.141 0 255.84-.372.372-34.64.48-151.8.48H0v2H303.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m315.641.414l-1.241 1.414v255.144l1.241 1.414 1.242 1.414H400v-2h-41.32c-31.604 0-41.433-.113-41.8-.48-.699-.699-.699-255.141 0-255.84.367-.367 10.196-.48 41.8-.48H400v-2H316.883l-1.242 1.414M0 340.6v1h400v-2H0v1"
		></path>
	</g>
);

icons.cs = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40px"
		height="40px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<CS_GIcon/>
	</svg>
);

icons.cs_small = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<CS_GIcon/>
	</svg>
);


const CSS_GIcon = () => (
	<g fillRule="evenodd" stroke="none">
		<path
			fill="#fcfcfc"
			d="M0 65v4.2h208.08l1.36 1.36 1.36 1.36v256.16l-1.36 1.36-1.36 1.36H0v8.4h400v-8.4h-41.511c-45.641 0-42.561.169-43.891-2.404-.908-1.757-.908-255.035 0-256.792 1.33-2.573-1.75-2.404 43.891-2.404H400v-8.4H0V65m303.913 4.824C306.154 71.394 306 61.784 306 200c0 112.103-.071 127.377-.598 128.396-1.329 2.571 1.651 2.404-42.931 2.404H221.92l-1.36-1.36-1.36-1.36V71.92l1.36-1.36 1.36-1.36h40.551c36.099 0 40.649.069 41.442.624"
		></path>
		<path
			fill="#d4d4d4"
			d="M0 29.2v29.2h400V0H0v29.2M0 200v128.4h103.72c80.138 0 103.829-.109 104.2-.48.699-.699.699-255.141 0-255.84-.371-.371-24.062-.48-104.2-.48H0V200M222.08 72.08c-.699.699-.699 255.141 0 255.84.696.696 80.344.696 81.04 0 .699-.699.699-255.141 0-255.84-.696-.696-80.344-.696-81.04 0m94.8 0c-.699.699-.699 255.141 0 255.84.367.367 10.196.48 41.8.48H400V71.6h-41.32c-31.604 0-41.433.113-41.8.48M0 370.8V400h400v-58.4H0v29.2"
		></path>
		<path
			fill="#dcece8"
			d="M0 59.4v1h400v-2H0v1m0 11.2v1h103.72c80.138 0 103.829.109 104.2.48.699.699.699 255.141 0 255.84-.371.371-24.062.48-104.2.48H0v2h208.062l1.169-1.169 1.169-1.169V71.938l-1.169-1.169-1.169-1.169H0v1m220.769.169l-1.169 1.169v256.124l1.169 1.169 1.169 1.169h81.179l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414h-81.179l-1.169 1.169m94.872.245l-1.241 1.414v255.144l1.241 1.414 1.242 1.414H400v-2h-41.32c-31.604 0-41.433-.113-41.8-.48-.699-.699-.699-255.141 0-255.84.367-.367 10.196-.48 41.8-.48H400v-2H316.883l-1.242 1.414M303.12 72.08c.699.699.699 255.141 0 255.84-.696.696-80.344.696-81.04 0-.699-.699-.699-255.141 0-255.84.696-.696 80.344-.696 81.04 0M0 340.6v1h400v-2H0v1"
		></path>
	</g>
);

icons.css = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40px"
		height="40px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<CSS_GIcon/>

	</svg>
);

icons.css_small = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<CSS_GIcon/>

	</svg>
);

const SC_GIcon = () => (
	<g fillRule="evenodd" stroke="none">
		<g fillRule="evenodd" stroke="none">
			<path
				fill="#fcfcfc"
				d="M0 65v4.2h41.511c45.641 0 42.561-.169 43.891 2.404.908 1.757.908 255.035 0 256.792-1.33 2.573 1.75 2.404-43.891 2.404H0v8.4h400v-8.4H248.489c-136.648 0-151.598-.061-152.402-.624C93.846 328.606 94 338.216 94 200c0-138.216-.154-128.606 2.087-130.176.804-.563 15.754-.624 152.402-.624H400v-8.4H0V65"
			></path>
			<path
				fill="#d4d4d4"
				d="M0 29.2v29.2h400V0H0v29.2M0 200v128.4h41.32c31.604 0 41.433-.113 41.8-.48.699-.699.699-255.141 0-255.84-.367-.367-10.196-.48-41.8-.48H0V200M96.88 72.08c-.699.699-.699 255.141 0 255.84.372.372 34.64.48 151.8.48H400V71.6H248.68c-117.16 0-151.428.108-151.8.48M0 370.8V400h400v-58.4H0v29.2"
			></path>
			<path
				fill="#dcece8"
				d="M0 59.4v1h400v-2H0v1m0 11.2v1h41.32c31.604 0 41.433.113 41.8.48.699.699.699 255.141 0 255.84-.367.367-10.196.48-41.8.48H0v2H83.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m95.641.414L94.4 72.428v255.144l1.241 1.414 1.242 1.414H400v-2H248.68c-117.16 0-151.428-.108-151.8-.48-.699-.699-.699-255.141 0-255.84.372-.372 34.64-.48 151.8-.48H400v-2H96.883l-1.242 1.414M0 340.6v1h400v-2H0v1"
			></path>
		</g>
	</g>
);

icons.sc = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40px"
		height="40px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<SC_GIcon/>
	</svg>
);

icons.sc_small = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<SC_GIcon/>
	</svg>
);


const SSC_GIcon = () => (
	<g fillRule="evenodd" stroke="none">
		<path
			fill="#fcfcfc"
			d="M0 65v4.2h41.511c45.641 0 42.561-.169 43.891 2.404.908 1.757.908 255.035 0 256.792-1.33 2.573 1.75 2.404-43.891 2.404H0v8.4h400v-8.4H248.489c-136.648 0-151.598-.061-152.402-.624C93.846 328.606 94 338.216 94 200c0-138.216-.154-128.606 2.087-130.176.804-.563 15.754-.624 152.402-.624H400v-8.4H0V65"
		></path>
		<path
			fill="#d4d4d4"
			d="M0 29.2v29.2h400V0H0v29.2M0 200v128.4h41.32c31.604 0 41.433-.113 41.8-.48.699-.699.699-255.141 0-255.84-.367-.367-10.196-.48-41.8-.48H0V200M96.88 72.08c-.699.699-.699 255.141 0 255.84.372.372 34.64.48 151.8.48H400V71.6H248.68c-117.16 0-151.428.108-151.8.48M0 370.8V400h400v-58.4H0v29.2"
		></path>
		<path
			fill="#dcece8"
			d="M0 59.4v1h400v-2H0v1m0 11.2v1h41.32c31.604 0 41.433.113 41.8.48.699.699.699 255.141 0 255.84-.367.367-10.196.48-41.8.48H0v2H83.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m95.641.414L94.4 72.428v255.144l1.241 1.414 1.242 1.414H400v-2H248.68c-117.16 0-151.428-.108-151.8-.48-.699-.699-.699-255.141 0-255.84.372-.372 34.64-.48 151.8-.48H400v-2H96.883l-1.242 1.414M0 340.6v1h400v-2H0v1"
		></path>
	</g>
);


icons.ssc = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40px"
		height="40px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<SSC_GIcon/>

	</svg>
);

icons.ssc_small = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<SSC_GIcon/>

	</svg>
);

const SCS_GIcon = () => (
	<g fillRule="evenodd" stroke="none">
		<path
			fill="#fcfcfc"
			d="M0 65v4.2h41.511c45.641 0 42.561-.169 43.891 2.404.908 1.757.908 255.035 0 256.792-1.33 2.573 1.75 2.404-43.891 2.404H0v8.4h400v-8.4h-41.511c-45.641 0-42.561.169-43.891-2.404-.908-1.757-.908-255.035 0-256.792 1.33-2.573-1.75-2.404 43.891-2.404H400v-8.4H0V65m303.913 4.824C306.154 71.394 306 61.784 306 200c0 138.216.154 128.606-2.087 130.176-1.363.955-206.463.955-207.826 0C93.846 328.606 94 338.216 94 200c0-138.216-.154-128.606 2.087-130.176 1.363-.955 206.463-.955 207.826 0"
		></path>
		<path
			fill="#d4d4d4"
			d="M0 29.2v29.2h400V0H0v29.2M0 200v128.4h41.32c31.604 0 41.433-.113 41.8-.48.699-.699.699-255.141 0-255.84-.367-.367-10.196-.48-41.8-.48H0V200M96.88 72.08c-.699.699-.699 255.141 0 255.84.699.699 205.541.699 206.24 0 .699-.699.699-255.141 0-255.84-.699-.699-205.541-.699-206.24 0m220 0c-.699.699-.699 255.141 0 255.84.367.367 10.196.48 41.8.48H400V71.6h-41.32c-31.604 0-41.433.113-41.8.48M0 370.8V400h400v-58.4H0v29.2"
		></path>
		<path
			fill="#dcece8"
			d="M0 59.4v1h400v-2H0v1m0 11.2v1h41.32c31.604 0 41.433.113 41.8.48.699.699.699 255.141 0 255.84-.367.367-10.196.48-41.8.48H0v2H83.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m95.641.414L94.4 72.428v255.144l1.241 1.414 1.242 1.414h206.234l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H96.883l-1.242 1.414m220 0l-1.241 1.414v255.144l1.241 1.414 1.242 1.414H400v-2h-41.32c-31.604 0-41.433-.113-41.8-.48-.699-.699-.699-255.141 0-255.84.367-.367 10.196-.48 41.8-.48H400v-2H316.883l-1.242 1.414M303.12 72.08c.699.699.699 255.141 0 255.84-.699.699-205.541.699-206.24 0-.699-.699-.699-255.141 0-255.84.699-.699 205.541-.699 206.24 0M0 340.6v1h400v-2H0v1"
		></path>
	</g>
);

icons.scs = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40px"
		height="40px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<SCS_GIcon/>

	</svg>
);

icons.scs_small = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20px"
		height="20px"
		version="1.1"
		viewBox="0 0 400 400"
	>
		<SCS_GIcon/>

	</svg>
);

export default icons;