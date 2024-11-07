<?php

get_header(); ?>


<?php
  $post_type = get_post_type(get_the_ID());
  
  if ($post_type === 'services') { ?>
    <div id="service-details"></div>
  <?php } else if ($post_type === 'doctors') { ?>
    <div id="doctor-details"></div>
  <?php } else if ($post_type === 'post') { ?>
    <div id="article-details"></div>
  <?php }
?>

<?php get_footer();