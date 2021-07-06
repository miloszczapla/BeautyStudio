"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const User_1 = require("../entities/User");
const Emailvalidator = __importStar(require("email-validator"));
const libphonenumber_js_1 = require("libphonenumber-js");
let RegisterPassInput = class RegisterPassInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterPassInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterPassInput.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterPassInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RegisterPassInput.prototype, "phone", void 0);
RegisterPassInput = __decorate([
    type_graphql_1.InputType()
], RegisterPassInput);
let LoginPassInput = class LoginPassInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginPassInput.prototype, "login", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginPassInput.prototype, "password", void 0);
LoginPassInput = __decorate([
    type_graphql_1.InputType()
], LoginPassInput);
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let UserResponce = class UserResponce {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponce.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponce.prototype, "user", void 0);
UserResponce = __decorate([
    type_graphql_1.ObjectType()
], UserResponce);
let UserResolver = class UserResolver {
    register(options, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Emailvalidator.validate(options.email)) {
                return {
                    errors: [
                        {
                            field: 'email',
                            message: "email is invalid or doesn't exist, email jest nie poprawny albo nie istnieje",
                        },
                    ],
                };
            }
            if (options.phone === '') {
                return {
                    errors: [
                        {
                            field: 'phone',
                            message: "phone number doesn't exist, numer telefonu nie istnieje",
                        },
                    ],
                };
            }
            try {
                const phoneNumber = libphonenumber_js_1.parsePhoneNumber(options.phone);
                if (phoneNumber.isValid()) {
                    return {
                        errors: [
                            {
                                field: 'phone',
                                message: 'phone number is invalid, numer telefonu jest nie poprawny',
                            },
                        ],
                    };
                }
            }
            catch (error) {
                return {
                    errors: [
                        {
                            field: 'phone',
                            message: 'phone number is invalid, numer telefonu jest nie poprawny',
                        },
                    ],
                };
            }
            const re = new RegExp('(?=.{8,})(?=.*[a-z])');
            if (!re.test(options.password)) {
                return {
                    errors: [
                        {
                            field: 'password',
                            message: 'Password is too weak, password must be at least 8 characters long and contain at least 1 lowercase, hasło jest za słabe, powinno składać sięz 8 znaków i zawierać co najmniej 1 małą literę',
                        },
                    ],
                };
            }
            const hasedPassword = yield argon2_1.default.hash(options.password);
            let user;
            try {
                user = em.create(User_1.User, {
                    email: options.email.toLowerCase(),
                    password: hasedPassword,
                    name: options.name,
                    phone: options.phone,
                });
                yield em.persistAndFlush(user);
            }
            catch (err) {
                if (err.code === '23505' || err.detail.includes('already exists')) {
                    return {
                        errors: [
                            {
                                field: 'overall',
                                message: 'user already exists, użytkownik juz istnieje',
                            },
                        ],
                    };
                }
            }
            return { user };
        });
    }
    login(options, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield em.findOne(User_1.User, { email: options.login.toLowerCase() });
            if (!user) {
                user = yield em.findOne(User_1.User, { phone: options.login });
            }
            if (!user) {
                return {
                    errors: [
                        {
                            field: 'login',
                            message: "login is invalid or doesn't exist, login jest nie poprawny albo uzytkownik nie istnieje",
                        },
                    ],
                };
            }
            const validPass = yield argon2_1.default.verify(user.password, options.password);
            if (!validPass) {
                return {
                    errors: [
                        {
                            field: 'password',
                            message: 'incorrect password, hasło jest nie poprawne',
                        },
                    ],
                };
            }
            return { user: user };
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => UserResponce),
    __param(0, type_graphql_1.Arg('options')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterPassInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponce),
    __param(0, type_graphql_1.Arg('options')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginPassInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map