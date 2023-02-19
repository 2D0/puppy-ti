//반응형 전용 device size 데이터
const size = {
    MaxWidthS: '375px',
    MaxWidthM: '425px',
    MaxWidthL: '500px',
    MaxHeightS: '1000px',
};
const device = {
    MaxWidthS: `(max-width: ${size.MaxWidthS})`,
    MaxWidthM: `(max-width: ${size.MaxWidthM})`,
    MaxWidthL: `(max-width: ${size.MaxWidthL})`,
    MaxHeightS: `(max-height: ${size.MaxHeightS})`,
};
export default device;
