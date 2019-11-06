<?php
/**
 *
 * Beans Framework
 *
 * @since 2.0.0
 *
 * @package Beans\Framework
 *
 * @author genesis
 */

?>
<div class="error"><p>
	<strong><?php esc_html_e( 'Please Activate a Beans Child Theme:', 'tm-beans' ); ?></strong>
	<?php
	esc_html_e( 'We\'ve noticed you are using the Beans Framework parent theme alone. We strongly recommend you run a Beans child theme with it (we even have a free theme you can use). ', 'tm-beans' );
	printf( esc_html__( 'For more information, see Genesis Framework article at %s', 'tm-beans' ), make_clickable( __( 'https://www.studiopress.com/genesis-always-use-child-theme/', 'tm-beans' ) )
);
	?>
</p></div>
