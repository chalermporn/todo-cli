const fs = require("fs");
const contentVue = require("./contentVue");
const contentVueUd = require("./contentVueUd");

function capitalize(str) {
  if (typeof str === "string") {
    if (str.charAt(0) === "/") {
      str = str.slice(1);
      return "/" + str.replace(/^\w/, (c) => c.toUpperCase());
    }
    return str.replace(/^\w/, (c) => c.toUpperCase());
  } else {
    return "";
  }
}

function vueaddmenu() {
  const menu = {
    sysId: "9315BDE9-A131-4273-9E92-6AFC7279EA29",
    menuName: "receive",
    menuTitle: "ระบบงบประมาณ",
    menuLevel: 0,
    showOrder: 10,
    rootPath: "/receive",
    navigateParameter: "",
    submenu: [
      {
        sysId: "4650AD79-0881-4744-BBFF-D1EA2B11AE94",
        menuName: "",
        menuTitle: "ภาษีอากร",
        menuLevel: 1,
        showOrder: 10,
        parentMenuId: "9315BDE9-A131-4273-9E92-6AFC7279EA29",
        rootPath: "",
        navigateParameter: "",
        submenu: [
          {
            sysId: "4650AD79-0881-4744-BBFF-D1EA2B11AE94",
            menuName: "UDARM0001",
            menuTitle:
              "ภาษีโรงเรือนและที่ดิน/บำรุงท้องที่/ป้าย/<br>ที่ดินและสิ่งปลูกสร้าง.",
            menuLevel: 1,
            showOrder: 10,
            rootPath: "/receive/UDARM0001",
            parentMenuId: "9315BDE9-A131-4273-9E92-6AFC7279EA29",
            navigateParameter:
              "programId1=program0001&screenId1=localInfo&programId2=program0002&screenId2=xxx",
          },
          {
            sysId: "4650AD79-0881-4744-BBFF-D1EA2B11AE94",
            menuName: "UDARM0002",
            menuTitle: "อากรการฆ่าสัตว์",
            menuLevel: 1,
            showOrder: 10,
            rootPath: "/receive/UDARM0002",
            parentMenuId: "9315BDE9-A131-4273-9E92-6AFC7279EA29",
            navigateParameter:
              "programId1=program0001&screenId1=localInfo&programId2=program0002&screenId2=xxx",
          },
        ],
      },
    ],
  };

  const welcome = `<script setup lang="ts">
  import Welcome from '@/shared/components/contents/Welcome.component.vue'
  </script>
  
  <template>
    <Welcome />
  </template>`;

  const component = (c) => {
    return `<script setup lang="ts">
  </script>
  
  <template>
   <div>Component : ${c} </div>
  </template>`;
  };

  const createIfNotExists = (path) => {
    if (!fs.existsSync(path)) fs.mkdirSync(path);
  };

  const pathApp = "src/views/app";
  const pathCommon = "src/views/common";
  const menuFolder = pathApp + menu.rootPath;
  const IndexView = "/IndexView.vue";

  createIfNotExists(menuFolder);
  createIfNotExists(pathCommon);

  menu.submenu.forEach((sm) => {
    //menuLevel 0
    const menuLevel_0 = menuFolder + sm.rootPath;
    createIfNotExists(menuLevel_0);
    fs.writeFileSync(menuLevel_0 + IndexView, welcome);

    if (sm.submenu) {
      sm.submenu.forEach((sm2) => {
        //menuLevel 1
        const ud = sm2.rootPath.replace("/receive", "").toLowerCase();

        const menuLevel_1 = menuLevel_0 + ud;
        createIfNotExists(menuLevel_1.toLowerCase());
        //indexView.vue
        fs.writeFileSync(
          menuLevel_1 + IndexView,
          contentVue({
            menuTitle: sm2.menuTitle,
            menuName: sm2.menuName,
            rootPath: sm2.rootPath.toLowerCase() + capitalize(ud) + ".vue",
          })
        );
        //UD.vue
        fs.writeFileSync(
          menuLevel_1 + capitalize(ud) + ".vue",
          contentVueUd(sm2.menuName)
        );

        //views/common
        const subCommon = pathCommon + "/" + sm2.menuName.toLowerCase();

        if (sm2.navigateParameter) {
          const splited = new URLSearchParams(sm2.navigateParameter);

          splited.forEach((sp, i) => {
            createIfNotExists(subCommon);

            if (i.includes("programId")) {
              createIfNotExists(`${subCommon}/${sp.toLowerCase()}`);
              fs.writeFileSync(
                `${subCommon}/${sp}/${sp}.component.vue`,
                component(sp)
              );
            }
          });
        }
      });
    }
  });
}
module.exports = vueaddmenu;
