// ✅ Esto sí es válido en features.ts
import { FiCoffee, FiShoppingCart } from "react-icons/fi";
import { LuChartColumn } from "react-icons/lu";
import { IconType } from "react-icons";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: FiCoffee,
    title: "Gestión de Inventario",
    description:
      "Control preciso de productos",
  },
  {
  icon: FiShoppingCart,
  title: "Gestión de Pedidos",
  description:
    "Permite a los usuarios realizar pedidos fácilmente, personalizarlos y hacer seguimiento en tiempo real.",
},
  // {
  //   icon: FiUsers,
  //   title: "Gestión de Personal",
  //   description: "Administra turnos, roles y permisos para todo el personal de cafetería.",
  // },
  // {
  //   icon: FiCalendar,
  //   title: "Planificación de Menús",
  //   description: "Crea y programa menús semanales o mensuales con facilidad.",
  // },
  {
    icon: LuChartColumn,
    title: "Reportes y Análisis",
    description:
      "Estadísticas detalladas sobre ventas, consumo y preferencias.",
  },
];
