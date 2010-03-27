<?php
$module_name = 'd1_Editions';
$viewdefs [$module_name] = 
array (
  'DetailView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'buttons' => 
        array (
          0 => 'EDIT',
          1 => 'DUPLICATE',
          2 => 'DELETE',
        ),
      ),
      'maxColumns' => '2',
      'widths' => 
      array (
        0 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
        1 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
      ),
    ),
    'panels' => 
    array (
      'default' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'name',
            'label' => 'LBL_NAME',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'date_of_the_following_publicat',
            'label' => 'LBL_DATE_OF_THE_FOLLOWING_PUBLICAT',
          ),
          1 => 
          array (
            'name' => 'the_status',
            'studio' => 'visible',
            'label' => 'LBL_THE_STATUS',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO_NAME',
          ),
          1 => 
          array (
            'name' => 'email_for_sending_of_announce',
            'label' => 'LBL_EMAIL_FOR_SENDING_OF_ANNOUNCE',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'the_requirement_to_the_announc',
            'studio' => 'visible',
            'label' => 'LBL_THE_REQUIREMENT_TO_THE_ANNOUNC',
          ),
        ),
      ),
      'lbl_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'limit_for_a_city',
            'label' => 'LBL_LIMIT_FOR_A_CITY',
          ),
          1 => 
          array (
            'name' => 'freely_for_a_city',
            'label' => 'LBL_FREELY_FOR_A_CITY',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'limit_for_offcity',
            'label' => 'LBL_LIMIT_FOR_OFFCITY',
          ),
          1 => 
          array (
            'name' => 'freely_for_offcity',
            'label' => 'LBL_FREELY_FOR_OFFCITY',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'limit_for_the_commercial_real_',
            'label' => 'LBL_LIMIT_FOR_THE_COMMERCIAL_REAL_',
          ),
          1 => 
          array (
            'name' => 'freely_for_the_commercial_real',
            'label' => 'LBL_FREELY_FOR_THE_COMMERCIAL_REAL',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'limit_for_office_real_estate',
            'label' => 'LBL_LIMIT_FOR_OFFICE_REAL_ESTATE',
          ),
          1 => 
          array (
            'name' => 'freely_for_office_real_estate',
            'label' => 'LBL_FREELY_FOR_OFFICE_REAL_ESTATE',
          ),
        ),
      ),
    ),
  ),
);
?>
