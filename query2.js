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
      T41.CONFLICT_ID,
      T41.LAST_UPD,
      T41.CREATED,
      T41.LAST_UPD_BY,
      T41.CREATED_BY,
      T41.MODIFICATION_NUM,
      T41.ROW_ID,
      T41.ROW_ID,
      T35.REF_NUMBER_2,
      T16.INTEGRATION_ID,
      T16.LOC,
      T16.NAME,
      T38.AGREE_ADDR_ID,
      T41.CFG_STATE_CD,
      T5.VER_NUM,
      T41.CFG_TYPE_CD,
      T5.RELEASED_FLG,
      T41.COST_LST_ID,
      T31.CFG_MODEL_ID,
      T41.BILL_PROFILE_ID,
      T41.BAR_CODE_NUM,
      T41.DESC_TEXT,
      T41.ASSET_VAL_CURCY_CD,
      T16.OU_NUM,
      T31.ONL_PAGESET_ID,
      T41.CAPACITY,
      T16.OU_TYPE_CD,
      T3.ZIPCODE,
      T3.COUNTRY,
      T3.CITY,
      T3.ADDR_LINE_2,
      T16.PR_ADDR_ID,
      T3.ADDR,
      T16.BU_ID,
      T3.STATE,
      T41.AGREE_ITEM_ID,
      T41.CUR_AGREE_ID,
      T41.ASSET_NUM,
      T41.ASSET_VAL_EXCH_DT,
      T41.BILL_ACCNT_ID,
      T41.TYPE_CD,
      T41.ASSET_VALUE_AMT,
      T41.STATUS_CD,
      T41.STATUS_CHG_DT,
      T14.CMPND_PROD_NUM,
      T41.INTEGRATION_ID,
      T41.LOT_NUM,
      T41.LOAD_ADDED,
      T41.REF_NUMBER_1,
      T41.MAKE_CD,
      T41.MSRP,
      T41.ASSET_MEM_INTEG_ID,
      T41.MFGD_DT,
      T31.MODEL,
      T41.MODEL_YR,
      T41.NAME,
      T41.OWNER_CON_ID,
      T41.PR_ACCNT_ID,
      T41.OWNER_ACCNT_ID,
      T41.ORIGINAL_COST,
      T41.OU_ADDR_ID,
      T41.OWNERSHIP_TYPE_CD,
      T37.CITY,
      T41.PER_ADDR_ID,
      T41.PREF_SRV_DLR_ID,
      T41.PAR_ASSET_ID,
      T7.EMAIL_ADDR,
      T16.PR_BILL_PRFL_ID,
      T41.PR_CON_ID,
      T41.POLICY_DISCNT_AMT,
      T37.ZIPCODE,
      T37.STATE,
      T7.CELL_PH_NUM,
      T41.PR_POSTN_ID,
      T41.PR_EMP_ID,
      T41.BU_ID,
      T41.PORT_VALID_PROD_ID,
      T41.PROM_INTEG_ID,
      T31.PROD_TYPE_CD,
      T31.DESC_TEXT,
      T31.PROD_CATG_CD,
      T41.PROMOTION_ID,
      T31.NAME,
      T41.PROD_ID,
      T24.PAR_VOD_ID,
      T31.SERIALIZED_FLG,
      T31.PR_PROD_LN_ID,
      T41.ASSEMBLY_PORT_ID,
      T41.PROM_GROUP_ID,
      T41.PROM_GROUP_ITEM_ID,
      T23.NAME,
      T41.REF_NUMBER_2,
      T41.RATE_EXCEPTION,
      T41.RATE_CD,
      T41.QTY,
      T7.FST_NAME,
      T7.LAST_NAME,
      T41.MODEL_CD,
      T41.CFG_VALDN_STAT_CD,
      T31.TYPE,
      T41.CFG_VALDN_STAT_DT,
      T21.ROW_ID,
      T41.VERSION,
      T16.SRV_PROVDR_FLG,
      T4.SERV_LENGTH_UOM_CD,
      T31.PROD_CATG_CD,
      T41.SP_NUM,
      T41.BASE_CURRENCY_CD,
      T41.DISCNT_AMT,
      T41.DISCNT_PERCENT,
      T4.SERVICE_LENGTH,
      T41.START_DT,
      T41.END_DT,
      T41.DLR_ID,
      T41.EXCH_DATE,
      T41.EFFICIENCY_RATING,
      T41.EXTD_QTY,
      T41.INVLOC_ID,
      T41.INSTALL_DT,
      T41.INTERNAL_ASSET_FLG,
      T32.OU_TYPE_CD,
      T12.ADDR,
      T25.EMAIL_ADDR,
      T27.LAST_NAME,
      T27.FST_NAME,
      T27.BIRTH_DT,
      T32.MARKET_TYPE_CD,
      T17.DESC_TEXT,
      T17.PAYMNT_TYPE_CD,
      T17.NAME,
      T32.MARKET_CLASS_CD,
      T40.ATTRIB_05,
      T13.NAME,
      T40.ATTRIB_02,
      T30.NAME,
      T34.INTEGRATION_ID,
      T41.X_COMM_TEMPLATE_ID,
      T8.NAME,
      T8.MSG_SUBJ_TEXT,
      T7.BIRTH_DT,
      T41.REGISTERED_DT,
      T41.ROOT_ASSET_ID,
      T35.INTEGRATION_ID,
      T1.PROD_TYPE_CD,
      T35.CFG_TYPE_CD,
      T1.NET_ELMT_TYPE_CD,
      T35.PROD_ID,
      T41.TEST_ASSET_FLG,
      T29.NAME,
      T35.PROMOTION_ID,
      T41.SERIAL_NUM,
      T41.SERV_ACCT_ID,
      T36.EMAIL_ADDR,
      T40.ATTRIB_10,
      T31.PAYMNT_TYPE_CD,
      T31.PAYMNT_TYPE_CD,
      T19.LANGUAGUES,
      T6.ATTRIB_07,
      T12.ADDR_LINE_3,
      T12.ADDR_LINE_4,
      T12.COUNTRY,
      T7.MID_NAME,
      T35.PROMOTION_ID,
      T33.ANNL_INCOME_DT,
      T10.DRIVER_LICENSE,
      T40.ATTRIB_39,
      T18.ACCESS_LVL_CD,
      T7.ASST_PH_NUM,
      T12.ADDR_LINE_2,
      T12.CITY,
      T12.STATE,
      T12.ZIPCODE,
      T3.ADDR_LINE_3,
      T3.ADDR_LINE_4,
      T36.CELL_PH_NUM,
      T7.PREF_COMM_METH_CD,
      T40.ATTRIB_36,
      T28.NAME,
      T28.ADDR,
      T7.INVSTGTR_FLG,
      T32.OWNERSHIP_TYPE_CD,
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
      T40.ROW_ID,
      T40.PAR_ROW_ID,
      T40.MODIFICATION_NUM,
      T40.CREATED_BY,
      T40.LAST_UPD_BY,
      T40.CREATED,
      T40.LAST_UPD,
      T40.CONFLICT_ID,
      T40.PAR_ROW_ID,
      T9.ROW_ID,
      T20.ROW_ID,
      T39.ROW_ID,
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
       SIEBEL.S_PER_COMM_ADDR T28,
       SIEBEL.S_CTLG_CAT T29,
       SIEBEL.S_ORG_EXT T30,
       SIEBEL.S_PROD_INT T31,
       SIEBEL.S_ORG_EXT T32,
       SIEBEL.S_CONTACT_FNX T33,
       SIEBEL.S_ORG_EXT T34,
       SIEBEL.S_ASSET T35,
       SIEBEL.S_CONTACT T36,
       SIEBEL.S_ADDR_PER T37,
       SIEBEL.S_DOC_AGREE T38,
       SIEBEL.S_ASSET_BU T39,
       SIEBEL.S_ASSET_X T40,
       SIEBEL.S_ASSET T41
   WHERE 
      T41.BILL_ACCNT_ID = T34.PAR_ROW_ID (+) AND T41.BILL_ACCNT_ID = T34.PAR_ROW_ID (+) AND
      T41.BILL_PROFILE_ID = T25.ROW_ID (+) AND
      T25.ADDR_ID = T12.ROW_ID (+) AND
      T25.CON_ID = T27.PAR_ROW_ID (+) AND
      T41.PR_CON_ID = T19.PAR_ROW_ID (+) AND
      T41.OWNER_ACCNT_ID = T6.PAR_ROW_ID (+) AND
      T41.PROMOTION_ID = T17.ROW_ID (+) AND
      T41.PR_CON_ID = T7.ROW_ID (+) AND
      T41.BU_ID = T30.ROW_ID (+) AND
      T25.CON_ID = T36.PAR_ROW_ID (+) AND
      T21.ROW_ID = T24.VOD_ID (+) AND T24.LAST_VERS (+) = '0' AND
      T41.ROOT_ASSET_ID = T35.ROW_ID (+) AND
      T41.ROOT_ASSET_ID = T14.PAR_ROW_ID (+) AND
      T35.PROD_ID = T1.ROW_ID (+) AND
      T11.PAR_CAT_ID = T29.ROW_ID (+) AND
      T31.CG_PR_CTLG_CAT_ID = T11.ROW_ID (+) AND
      T41.PER_ADDR_ID = T37.ROW_ID (+) AND
      T16.PR_ADDR_ID = T3.ROW_ID (+) AND
      T16.BU_ID = T13.PAR_ROW_ID (+) AND
      T41.PR_CON_ID = T10.PAR_ROW_ID (+) AND
      T41.PR_CON_ID = T33.PAR_ROW_ID (+) AND
      T41.CUR_AGREE_ID = T38.ROW_ID (+) AND
      T41.OWNER_ACCNT_ID = T16.PAR_ROW_ID (+) AND
      T41.OWNER_ACCNT_ID = T18.PAR_ROW_ID (+) AND
      T41.BILL_ACCNT_ID = T2.PAR_ROW_ID (+) AND
      T41.PROD_ID = T31.ROW_ID AND
      T31.PR_PROD_LN_ID = T23.ROW_ID (+) AND
      T31.CFG_MODEL_ID = T21.OBJECT_NUM AND
      T21.ROW_ID = T5.VOD_ID AND
      T41.SERV_ACCT_ID = T32.PAR_ROW_ID (+) AND T41.SERV_ACCT_ID = T32.PAR_ROW_ID (+) AND
      T41.PR_CON_ID = T28.PER_ID (+) AND
      T41.X_COMM_TEMPLATE_ID = T8.ROW_ID (+) AND
      T41.ROW_ID = T4.PAR_ROW_ID (+) AND
      T41.ROW_ID = T40.PAR_ROW_ID (+) AND
      T41.PR_CON_ID = T9.CONTACT_ID (+) AND T41.ROW_ID = T9.ASSET_ID (+) AND
      T41.PR_CON_ID = T20.ROW_ID (+) AND
      T41.PR_CON_ID = T22.PAR_ROW_ID (+) AND
      T41.BU_ID = T39.BU_ID (+) AND T41.ROW_ID = T39.ASSET_ID (+) AND
      T39.BU_ID = T26.ROW_ID (+) AND
      T39.BU_ID = T15.PAR_ROW_ID (+) AND
      (T5.VER_NUM = '1') AND
      (T41.PAR_ASSET_ID IS NULL AND T31.TYPE = 'Service Bundle' AND T41.SERIAL_NUM = :id)`,

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