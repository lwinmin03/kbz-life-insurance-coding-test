
import PageLoader from '@/components/core/page-loader';
import { lazy } from 'react';

export const MainLayout = PageLoader(
  lazy(() => import('@/components/layout/main-layout')),
);


export const ProductPage=PageLoader(
    lazy(()=>import('@/features/product/page'))
)

export const CartPage=PageLoader(
    lazy(()=>import('@/features/cart/page'))
)

export const OrderInfoPafe=PageLoader(
    lazy(()=>import('@/features/order-information/page'))
)

export const OrderSuccessPage=PageLoader(
    lazy(()=>import('@/features/order-success/page'))
)

