import Home, { getStaticProps } from '@/pages/index'
import { getLocale, loadCatalog } from '@/utils/locales'
import { act, render } from '@testing-library/react'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}))

jest.mock('@/utils/locales', () => ({
  __esModule: true,
  getLocale: jest.fn(),
  loadCatalog: jest.fn(),
}))

describe('Home', () => {
  const mockReplace = jest.fn()
  const useRouterMock: jest.Mock = useRouter as jest.Mock
  const getLocaleMock: jest.Mock = getLocale as jest.Mock
  const loadCatalogMock: jest.Mock = loadCatalog as jest.Mock

  beforeEach(() => {
    useRouterMock.mockReturnValue({
      replace: mockReplace,
    })
    getLocaleMock.mockReturnValue('en')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('redirects to locale-specific page on mount', () => {
    act(() => {
      render(<Home />)
    })

    expect(mockReplace).toHaveBeenCalledWith('/en')
  })

  it('gets static props correctly', async () => {
    loadCatalogMock.mockResolvedValue({ hello: 'world' })

    const props = await getStaticProps()

    expect(props).toEqual({
      props: {
        translation: { hello: 'world' },
      },
    })
  })
})
