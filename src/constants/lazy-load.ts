
import PageLoader from '@/components/core/page-loader';
import { lazy } from 'react';

export const MainLayout = PageLoader(
  lazy(() => import('@/components/layout/main-layout')),
);


export const ProductPage=PageLoader(
    lazy(()=>import('@/features/product/page'))
)

