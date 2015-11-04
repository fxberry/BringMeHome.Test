/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../../../BringMeHome/app/injections.ts" />
/// <reference path="../../../../BringMeHome/app/services/Strings.ts" />

describe('Strings service', () => {
    var mock = angular.mock;

    beforeEach(() => {
        var $module = angular.module($injections.Constants.AppName, []);
        mock.module($injections.Constants.AppName);

        $module.service('localize', ()=>jasmine.createSpyObj('localize', ['getLocalizedString']));
        $module.filter($injections.Filters.FormatFilter, ()=>jasmine.createSpy('format'));

		Services.StringsRegister($module);
    });

    it('Register', inject(($injector:angular.auto.IInjectorService) => {
        let service = $injector.get($injections.Services.Strings);

		expect(service).not.toBeNull();
        expect(service).not.toBeUndefined();
    }));

    it('should resolve a string by a key', inject(
		[
			'localize',
			$injections.Angular.$filter,
			$injections.Services.Strings,
			(localize, $filter:angular.IFilterService, strings:Services.IStrings) => {

			    var format:any = $filter($injections.Filters.FormatFilter);

				const key = 'key';
			    const localizedValue = 'localizedValue';
			    const formatedValue = 'formatedValue';
			    const parameter = 'parameter';

				localize.getLocalizedString.and.callFake(params => {
				    expect(params).toBe(key);
				    return localizedValue;
				});

			    format.and.callFake((input:string, ...args:any[]) => {
			        expect(input).toBe(localizedValue);
			        expect(args).toEqual([parameter]);
			        return formatedValue;
			    });

			    let actual = strings(key, parameter);

			    expect(actual).toBe(formatedValue);
			}
		]));
});
