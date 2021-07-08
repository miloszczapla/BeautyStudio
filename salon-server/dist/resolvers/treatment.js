"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentResolver = void 0;
const Treatment_1 = require("../entities/Treatment");
const type_graphql_1 = require("type-graphql");
let TreatmentResolver = class TreatmentResolver {
    treatments({ em }) {
        return em.find(Treatment_1.Treatment, {});
    }
    treatment(id, { em }) {
        return em.findOne(Treatment_1.Treatment, { id });
    }
    createTreatment(title, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = em.create(Treatment_1.Treatment, { title });
            yield em.persistAndFlush(post);
            return post;
        });
    }
    updateTreatment(id, title, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield em.findOne(Treatment_1.Treatment, { id });
            if (!post) {
                return null;
            }
            if (typeof title !== 'undefined') {
                post.title = title;
                yield em.persistAndFlush(post);
            }
            return post;
        });
    }
    deleteTreatment(id, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield em.nativeDelete(Treatment_1.Treatment, { id });
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Treatment_1.Treatment]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TreatmentResolver.prototype, "treatments", null);
__decorate([
    type_graphql_1.Query(() => Treatment_1.Treatment, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TreatmentResolver.prototype, "treatment", null);
__decorate([
    type_graphql_1.Mutation(() => Treatment_1.Treatment),
    __param(0, type_graphql_1.Arg('title')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TreatmentResolver.prototype, "createTreatment", null);
__decorate([
    type_graphql_1.Mutation(() => Treatment_1.Treatment, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')),
    __param(1, type_graphql_1.Arg('title', () => String, { nullable: true })),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], TreatmentResolver.prototype, "updateTreatment", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TreatmentResolver.prototype, "deleteTreatment", null);
TreatmentResolver = __decorate([
    type_graphql_1.Resolver()
], TreatmentResolver);
exports.TreatmentResolver = TreatmentResolver;
//# sourceMappingURL=treatment.js.map