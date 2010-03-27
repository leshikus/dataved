<?php
$module_name = 'd1_com';
$_object_name = 'd1_com';
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
          3 => 'FIND_DUPLICATES',
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
            'name' => 'organizational_legal_form',
            'studio' => 'visible',
            'label' => 'LBL_ORGANIZATIONAL_LEGAL_FORM',
          ),
          1 => 
          array (
            'name' => 'organization_date_of_creation',
            'label' => 'LBL_ORGANIZATION_DATE_OF_CREATION',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'name',
            'comment' => 'Name of the Company',
            'label' => 'LBL_NAME',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'trade_marks',
            'label' => 'LBL_TRADE_MARKS',
          ),
          1 => 
          array (
            'name' => 'd1_com_d1_com_name',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'the_basic_contact',
            'studio' => 'visible',
            'label' => 'LBL_THE_BASIC_CONTACT',
          ),
          1 => 
          array (
            'name' => 'the_responsible',
            'studio' => 'visible',
            'label' => 'LBL_THE_RESPONSIBLE',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'interest_source',
            'studio' => 'visible',
            'label' => 'LBL_INTEREST_SOURCE',
          ),
          1 => 
          array (
            'name' => 'web_site',
            'label' => 'LBL_WEB_SITE',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'date_entered',
            'customCode' => '{$fields.date_entered.value} {$APP.LBL_BY} {$fields.created_by_name.value}',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'd1_interest_d1_com_name',
          ),
        ),
      ),
      'lbl_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'main_phone',
            'label' => 'LBL_MAIN_PHONE',
          ),
          1 => 
          array (
            'name' => 'phone_fax',
            'comment' => 'The fax phone number of this company',
            'label' => 'LBL_FAX',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'other_phone',
            'label' => 'LBL_OTHER_PHONE',
          ),
          1 => 
          array (
            'name' => 'email',
            'label' => 'LBL_EMAIL',
          ),
        ),
      ),
      'lbl_panel2' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'field_of_activity',
            'studio' => 'visible',
            'label' => 'LBL_FIELD_OF_ACTIVITY',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_basic_region_of_activity',
            'studio' => 'visible',
            'label' => 'LBL_THE_BASIC_REGION_OF_ACTIVITY',
          ),
          1 => 
          array (
            'name' => 'number_of_employees',
            'label' => 'LBL_NUMBER_OF_EMPLOYEES',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'the_head_post',
            'studio' => 'visible',
            'label' => 'LBL_THE_HEAD_POST',
          ),
          1 => 
          array (
            'name' => 'the_head_names',
            'studio' => 'visible',
            'label' => 'LBL_THE_HEAD_NAMES',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'description',
            'comment' => 'Full text of the note',
            'label' => 'LBL_DESCRIPTION',
          ),
        ),
      ),
      'lbl_panel3' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'full_name',
            'label' => 'LBL_FULL_NAME',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'the_short_name',
            'label' => 'LBL_THE_SHORT_NAME',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'inn',
            'label' => 'LBL_INN',
          ),
          1 => 
          array (
            'name' => 'code_okpo',
            'label' => 'LBL_CODE_OKPO',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'kpp',
            'label' => 'LBL_KPP',
          ),
          1 => 
          array (
            'name' => 'p_c',
            'label' => 'LBL_P_C',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'ogrn',
            'label' => 'LBL_OGRN',
          ),
          1 => 
          array (
            'name' => 'kc',
            'label' => 'LBL_KC',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'bic',
            'label' => 'LBL_BIC',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'the_general_director',
            'studio' => 'visible',
            'label' => 'LBL_THE_GENERAL_DIRECTOR',
          ),
          1 => 
          array (
            'name' => 'the_chief_accountant',
            'studio' => 'visible',
            'label' => 'LBL_THE_CHIEF_ACCOUNTANT',
          ),
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'the_actual_address',
            'label' => 'LBL_THE_ACTUAL_ADDRESS',
          ),
        ),
        8 => 
        array (
          0 => 
          array (
            'name' => 'the_legal_address',
            'label' => 'LBL_THE_LEGAL_ADDRESS ',
          ),
        ),
      ),
    ),
  ),
);
?>
