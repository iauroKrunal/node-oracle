var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');
//console.log("ora---",oracledb, oracledb.DB_TYPE_TIMESTAMP_TZ);
oracledb.fetchAsString = [ 
  oracledb.DATE, 
  oracledb.NUMBER
];

// SELECT SERIAL_NUM from SIEBEL.S_ASSET where rownum < 100;
// Get a non-pooled connection
oracledb.getConnection(
  {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    try{
        connection.execute(
          // The statement to execute
          `SELECT
          T40.CONFLICT_ID,
          T40.LAST_UPD,
          T40.CREATED,
          T40.LAST_UPD_BY,
          T40.CREATED_BY,
          T40.MODIFICATION_NUM,
          T40.ROW_ID,
          T40.ROW_ID,
          T34.REF_NUMBER_2,
          T16.INTEGRATION_ID,
          T16.LOC,
          T16.NAME,
          T37.AGREE_ADDR_ID,
          T40.CFG_STATE_CD,
          T5.VER_NUM,
          T40.CFG_TYPE_CD,
          T5.RELEASED_FLG,
          T40.COST_LST_ID,
          T30.CFG_MODEL_ID,
          T40.BILL_PROFILE_ID,
          T40.BAR_CODE_NUM,
          T40.DESC_TEXT,
          T40.ASSET_VAL_CURCY_CD,
          T16.OU_NUM,
          T30.ONL_PAGESET_ID,
          T40.CAPACITY,
          T16.OU_TYPE_CD,
          T3.ZIPCODE,
          T3.COUNTRY,
          T3.CITY,
          T3.ADDR_LINE_2,
          T16.PR_ADDR_ID,
          T3.ADDR,
          T16.BU_ID,
          T3.STATE,
          T40.AGREE_ITEM_ID,
          T40.CUR_AGREE_ID,
          T40.ASSET_NUM,
          T40.ASSET_VAL_EXCH_DT,
          T40.BILL_ACCNT_ID,
          T40.TYPE_CD,
          T40.STATUS_CD,
          T40.STATUS_CHG_DT,
          T14.CMPND_PROD_NUM,
          T40.INTEGRATION_ID,
          T40.LOT_NUM,
          T40.LOAD_ADDED,
          T40.REF_NUMBER_1,
          T40.MAKE_CD,
          T40.MSRP,
          T40.ASSET_MEM_INTEG_ID,
          T40.MFGD_DT,
          T30.MODEL,
          T40.MODEL_YR,
          T40.NAME,
          T40.OWNER_CON_ID,
          T40.PR_ACCNT_ID,
          T40.OWNER_ACCNT_ID,
          T40.ORIGINAL_COST,
          T40.OU_ADDR_ID,
          T40.OWNERSHIP_TYPE_CD,
          T36.CITY,
          T40.PER_ADDR_ID,
          T40.PREF_SRV_DLR_ID,
          T40.PAR_ASSET_ID,
          T7.EMAIL_ADDR,
          T16.PR_BILL_PRFL_ID,
          T40.PR_CON_ID,
          T40.POLICY_DISCNT_AMT,
          T36.ZIPCODE,
          T36.STATE,
          T7.CELL_PH_NUM,
          T40.PR_POSTN_ID,
          T40.PR_EMP_ID,
          T40.BU_ID,
          T40.PORT_VALID_PROD_ID,
          T40.PROM_INTEG_ID,
          T30.PROD_TYPE_CD,
          T30.DESC_TEXT,
          T30.PROD_CATG_CD,
          T40.PROMOTION_ID,
          T30.NAME,
          T40.PROD_ID,
          T24.PAR_VOD_ID,
          T30.SERIALIZED_FLG,
          T30.PR_PROD_LN_ID,
          T40.ASSEMBLY_PORT_ID,
          T40.PROM_GROUP_ID,
          T40.PROM_GROUP_ITEM_ID,
          T23.NAME,
          T40.REF_NUMBER_2,
          T40.RATE_EXCEPTION,
          T40.RATE_CD,
          T40.QTY,
          T7.FST_NAME,
          T7.LAST_NAME,
          T40.MODEL_CD,
          T40.CFG_VALDN_STAT_CD,
          T30.TYPE,
          T40.CFG_VALDN_STAT_DT,
          T21.ROW_ID,
          T40.VERSION,
          T16.SRV_PROVDR_FLG,
          T4.SERV_LENGTH_UOM_CD,
          T30.PROD_CATG_CD,
          T40.SP_NUM,
          T40.BASE_CURRENCY_CD,
          T40.DISCNT_AMT,
          T40.DISCNT_PERCENT,
          T4.SERVICE_LENGTH,
          T40.START_DT,
          T40.END_DT,
          T40.DLR_ID,
          T40.EXCH_DATE,
          T40.EFFICIENCY_RATING,
          T40.EXTD_QTY,
          T40.INVLOC_ID,
          T40.INSTALL_DT,
          T40.INTERNAL_ASSET_FLG,
          T31.OU_TYPE_CD,
          T12.ADDR,
          T25.EMAIL_ADDR,
          T27.LAST_NAME,
          T27.FST_NAME,
          T27.BIRTH_DT,
          T31.MARKET_TYPE_CD,
          T17.DESC_TEXT,
          T17.PAYMNT_TYPE_CD,
          T17.NAME,
          T31.MARKET_CLASS_CD,
          T13.NAME,
          T39.ATTRIB_02,
          T29.NAME,
          T33.INTEGRATION_ID,
          T40.X_COMM_TEMPLATE_ID,
          T8.NAME,
          T8.MSG_SUBJ_TEXT,
          T7.BIRTH_DT,
          T40.REGISTERED_DT,
          T40.ROOT_ASSET_ID,
          T34.INTEGRATION_ID,
          T1.PROD_TYPE_CD,
          T34.CFG_TYPE_CD,
          T1.NET_ELMT_TYPE_CD,
          T34.PROD_ID,
          T40.TEST_ASSET_FLG,
          T28.NAME,
          T34.PROMOTION_ID,
          T40.SERIAL_NUM,
          T40.SERV_ACCT_ID,
          T35.EMAIL_ADDR,
          T39.ATTRIB_10,
          T30.PAYMNT_TYPE_CD,
          T30.PAYMNT_TYPE_CD,
          T19.LANGUAGUES,
          T6.ATTRIB_07,
          T12.ADDR_LINE_3,
          T12.ADDR_LINE_4,
          T12.COUNTRY,
          T7.MID_NAME,
          T34.PROMOTION_ID,
          T32.ANNL_INCOME_DT,
          T10.DRIVER_LICENSE,
          T39.ATTRIB_39,
          T18.ACCESS_LVL_CD,
          T7.ASST_PH_NUM,
          T12.ADDR_LINE_2,
          T12.CITY,
          T12.STATE,
          T12.ZIPCODE,
          T3.ADDR_LINE_3,
          T3.ADDR_LINE_4,
          T35.CELL_PH_NUM,
          T7.PREF_COMM_METH_CD,
          T39.ATTRIB_36,
          T7.INVSTGTR_FLG,
          T31.OWNERSHIP_TYPE_CD,
          T2.ATTRIB_05,
          T20.ROW_ID,
          T22.FST_NAME,
          T22.LAST_NAME,
          T22.PER_TITLE,
          T9.RELATION_TYPE_CD,
          T15.PAR_BU_ID,
          T15.NAME,
          T4.ROW_ID,
          T4.PAR_ROW_ID,
          T4.MODIFICATION_NUM,
          T4.CREATED_BY,
          T4.LAST_UPD_BY,
          T4.CREATED,
          T4.LAST_UPD,
          T4.CONFLICT_ID,
          T4.PAR_ROW_ID,
          T39.ROW_ID,
          T39.PAR_ROW_ID,
          T39.MODIFICATION_NUM,
          T39.CREATED_BY,
          T39.LAST_UPD_BY,
          T39.CREATED,
          T39.LAST_UPD,
          T39.CONFLICT_ID,
          T39.PAR_ROW_ID,
          T9.ROW_ID,
          T20.ROW_ID,
          T38.ROW_ID,
          T26.ROW_ID
       FROM 
           SIEBEL.S_PROD_INT T1,
           SIEBEL.S_ORG_EXT_X T2,
           SIEBEL.S_ADDR_PER T3,
           SIEBEL.S_ASSET_OM T4,
           SIEBEL.S_VOD_VER T5,
           SIEBEL.S_ORG_EXT_X T6,
           SIEBEL.S_CONTACT T7,
           SIEBEL.S_DMND_CRTN_PRG T8,
           SIEBEL.S_ASSET_CON T9,
           SIEBEL.S_CONTACT_ATX T10,
           SIEBEL.S_CTLG_CAT T11,
           SIEBEL.S_ADDR_PER T12,
           SIEBEL.S_BU T13,
           SIEBEL.S_ASSET_OM T14,
           SIEBEL.S_ORG_EXT T15,
           SIEBEL.S_ORG_EXT T16,
           SIEBEL.S_PROD_INT T17,
           SIEBEL.S_ORG_EXT_FNX T18,
           SIEBEL.S_CONTACT_TNTX T19,
           SIEBEL.S_PARTY T20,
           SIEBEL.S_VOD T21,
           SIEBEL.S_CONTACT T22,
           SIEBEL.S_PROD_LN T23,
           SIEBEL.S_ISS_OBJ_DEF T24,
           SIEBEL.S_INV_PROF T25,
           SIEBEL.S_PARTY T26,
           SIEBEL.S_CONTACT T27,
           SIEBEL.S_CTLG_CAT T28,
           SIEBEL.S_ORG_EXT T29,
           SIEBEL.S_PROD_INT T30,
           SIEBEL.S_ORG_EXT T31,
           SIEBEL.S_CONTACT_FNX T32,
           SIEBEL.S_ORG_EXT T33,
           SIEBEL.S_ASSET T34,
           SIEBEL.S_CONTACT T35,
           SIEBEL.S_ADDR_PER T36,
           SIEBEL.S_DOC_AGREE T37,
           SIEBEL.S_ASSET_BU T38,
           SIEBEL.S_ASSET_X T39,
           SIEBEL.S_ASSET T40
       WHERE 
          T40.BILL_ACCNT_ID = T33.PAR_ROW_ID (+) AND T40.BILL_ACCNT_ID = T33.PAR_ROW_ID (+) AND
          T40.BILL_PROFILE_ID = T25.ROW_ID (+) AND
          T25.ADDR_ID = T12.ROW_ID (+) AND
          T25.CON_ID = T27.PAR_ROW_ID (+) AND
          T40.PR_CON_ID = T19.PAR_ROW_ID (+) AND
          T40.OWNER_ACCNT_ID = T6.PAR_ROW_ID (+) AND
          T40.PROMOTION_ID = T17.ROW_ID (+) AND
          T40.PR_CON_ID = T7.ROW_ID (+) AND
          T40.BU_ID = T29.ROW_ID (+) AND
          T25.CON_ID = T35.PAR_ROW_ID (+) AND
          T21.ROW_ID = T24.VOD_ID (+) AND T24.LAST_VERS (+) = '0' AND
          T40.ROOT_ASSET_ID = T34.ROW_ID (+) AND
          T40.ROOT_ASSET_ID = T14.PAR_ROW_ID (+) AND
          T34.PROD_ID = T1.ROW_ID (+) AND
          T11.PAR_CAT_ID = T28.ROW_ID (+) AND
          T30.CG_PR_CTLG_CAT_ID = T11.ROW_ID (+) AND
          T40.PER_ADDR_ID = T36.ROW_ID (+) AND
          T16.PR_ADDR_ID = T3.ROW_ID (+) AND
          T16.BU_ID = T13.PAR_ROW_ID (+) AND
          T40.PR_CON_ID = T10.PAR_ROW_ID (+) AND
          T40.PR_CON_ID = T32.PAR_ROW_ID (+) AND
          T40.CUR_AGREE_ID = T37.ROW_ID (+) AND
          T40.OWNER_ACCNT_ID = T16.PAR_ROW_ID (+) AND
          T40.OWNER_ACCNT_ID = T18.PAR_ROW_ID (+) AND
          T40.BILL_ACCNT_ID = T2.PAR_ROW_ID (+) AND
          T40.PROD_ID = T30.ROW_ID AND
          T30.PR_PROD_LN_ID = T23.ROW_ID (+) AND
          T30.CFG_MODEL_ID = T21.OBJECT_NUM AND
          T21.ROW_ID = T5.VOD_ID AND
          T40.SERV_ACCT_ID = T31.PAR_ROW_ID (+) AND T40.SERV_ACCT_ID = T31.PAR_ROW_ID (+) AND
          T40.X_COMM_TEMPLATE_ID = T8.ROW_ID (+) AND
          T40.ROW_ID = T4.PAR_ROW_ID (+) AND
          T40.ROW_ID = T39.PAR_ROW_ID (+) AND
          T40.PR_CON_ID = T9.CONTACT_ID (+) AND T40.ROW_ID = T9.ASSET_ID (+) AND
          T40.PR_CON_ID = T20.ROW_ID (+) AND
          T40.PR_CON_ID = T22.PAR_ROW_ID (+) AND
          T40.BU_ID = T38.BU_ID (+) AND T40.ROW_ID = T38.ASSET_ID (+) AND
          T38.BU_ID = T26.ROW_ID (+) AND
          T38.BU_ID = T15.PAR_ROW_ID (+) AND
          (T5.VER_NUM = '1') AND
          (T40.SERIAL_NUM = :id)`,

          // The "bind value" 180 for the bind variable ":id"
           ['9769304026'],

          // execute() options argument.  Since the query only returns one
          // row, we can optimize memory usage by reducing the default
          // maxRows value.  For the complete list of other options see
          // the documentation.
          // { maxRows: 1
          //   //, outFormat: oracledb.OBJECT  // query result format
          //   //, extendedMetaData: true      // get extra metadata
          //   //, fetchArraySize: 100         // internal buffer allocation size for tuning
          // },

          // The callback function handles the SQL execution results
          function(err, result)
          {
            if (err) {
              console.error(err.message);
              doRelease(connection);
              return;
            }
            // console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
            console.log(JSON.stringify(result.rows));     // [ [ 180, 'Construction' ] ]
            doRelease(connection);
          });
     }
     catch(ex){
      console.log("Log: ex:",ex )
    }
  });

// Note: connections should always be released when not needed
function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}